const { json } = require('express');
const { MongoClient } = require('mongodb');
const { ForeignKeyError } = require('./errors/ForeignKeyError.js');
// import ForeignKeyError from 'errors/ForeignKeyError';


//this is the connection info for our specific DB
//DB name = 422database
//user = root
//pw = TargaryensFTW
const MONGO_CONNECTION_STRING = "mongodb+srv://root:TargaryensFTW@422databse.axyczfl.mongodb.net/?retryWrites=true&w=majority";
const uri = MONGO_CONNECTION_STRING;
const client = new MongoClient(uri);

//this method pulls from sample data on the db to display info
exports.bootDB = async function(){
    try{
        await client.connect();
        //identify db name (probably will always be the same for our purposes)
        const db = client.db("sample_guides");
        //identify collection name (like MySQL table)
        const collection = db.collection('planets');
        //collection.find returns a cursor
        //need to figure out how to read this into a JSON
        // & how to export that JSON out the API
        //also need to spend time learning how to pull the exact data we want - efficiency will be important
        const findResult = await collection.find({}).toArray();
        console.log('Found documents =>', findResult);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

//clears the database for the purpose of a fresh batch of data
exports.resetDatabase = async function(){
    try{
        await client.connect();
        var db = client.db("sample_cars");
        await db.collection("brand").deleteMany();
        await db.collection("car_type").deleteMany();
        await db.collection("model").deleteMany();
        await db.collection("model_year").deleteMany();
        db = client.db("sample_users");
        await db.collection("user").deleteMany();
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}



///CAR ADD OPERATIONS///
/* REMAINING
* package
    package_id
    model_year_id (FK)
    package_name
    base_price
* package_detail
    package_id (FK)
    part_id
* part
    part_id
    part_type_id (FK)
    part_name
    part_price
* part_allowed
    part_id (FK)
    model_year_id (FK)
* part_type
    part_type_id
    part_type_name

*/
exports.addBrand = async function(name){//good example to copy & paste for simple tables
    try{
        await client.connect();
        const db = client.db("sample_cars"); //select database
        const collection = db.collection('brand'); //select collection (table)
        var doc = {}; //empty document to insert (will be modified)

        if(await collection.countDocuments() == 0){ //check if collection empty
            doc = {brand_id: 0, brand_name: name}; //start at index 0
        } else { //not empty
            //query DB to find last record & imcrement index from there
            const query = {};
            const options = {
                //sort by brand_id -> descending
                sort: { "brand_id": -1 }
            };
            latestRecord = await collection.findOne(query, options);
            id = latestRecord.brand_id + 1;
            doc = {brand_id: id, brand_name: name};
        }

        //insert document
        await collection.insertOne(doc);
    } catch (e) {
    console.error(e);
    } finally {
        await client.close();
    }
}

exports.addCarType = async function(name){
    try{
        await client.connect();
        const db = client.db("sample_cars");
        const collection = db.collection('car_type');
        var doc = {};

        if(await collection.countDocuments() == 0){
            doc = {car_type_id: 0, car_type_name: name};
        } else {
            const query = {};
            const options = {
                //sort by car_type_id -> descending
                sort: { "car_type_id": -1 }
            };
            latestRecord = await collection.findOne(query, options);
            id = latestRecord.car_type_id + 1;
            doc = {car_type_id: id, car_type_name: name};
        }

        await collection.insertOne(doc);
    } catch (e) {
    console.error(e);
    } finally {
        await client.close();
    }
}

exports.addModel = async function(name, brand_id, car_type_id){//good example to copy & paste for tables w/ FKs
    try{
        await client.connect();
        const db = client.db("sample_cars");
        const collection = db.collection('model');
        var doc = {};

        if(await collection.countDocuments() == 0){
            doc = {model_id: 0, model_name: name, brand_id, car_type_id};
        } else {
            const query = {};
            const options = {
                //sort by model_id -> descending
                sort: { "model_id": -1 }
            };
            latestRecord = await collection.findOne(query, options);
            id = latestRecord.model_id + 1;
            //check brand FK
            if(!(await exists({brand_id: brand_id}, db.collection('brand')))){
                throw new ForeignKeyError("provided brand does not exist");
            }
            //check car_type FK
            if(!(await exists({car_type_id: car_type_id}, db.collection('car_type')))){
                throw new ForeignKeyError("provided car_type does not exist");
            }
            doc = {model_id: id, model_name: name, brand_id, car_type_id};
        }
        await collection.insertOne(doc);        
    } catch (e) {
    console.error(e);
    } finally {
        await client.close();
    }
}

exports.addModelYear = async function(model_id, year, main_image, header_image, description, featured, quantity){
    try{
        await client.connect();
        const db = client.db("sample_cars");
        const collection = db.collection('model_year');
        var doc = {};

        if(await collection.countDocuments() == 0){
            doc = {model_year_id: 0, model_id, year, main_image, header_image, description, featured, quantity};
        } else {
            const query = {};
            const options = {
                //sort by model_year_id -> descending
                sort: { "model_year_id": -1 }
            };
            latestRecord = await collection.findOne(query, options);
            id = latestRecord.model_year_id + 1;
            //check model FK
            if(!(await exists({model_id: model_id}, db.collection('model')))){
                throw new ForeignKeyError("provided model does not exist");
            }
            doc = {model_year_id: id, model_id, year, main_image, header_image, description, featured, quantity};
        }
        await collection.insertOne(doc);        
    } catch (e) {
    console.error(e);
    } finally {
        await client.close();
    }
}

//CAR READ OPERATIONS
exports.getCars = async function(){
    try{
        await client.connect();
        const findResult = {cars:[]};

        const db = client.db("sample_cars");
        const model_year_collection = db.collection('model_year');
        const model_collection = db.collection('model');
        const brand_collection = db.collection('brand');
        const car_type_collection = db.collection('car_type');

        var model_year_data = await model_year_collection.find({}).toArray();

        for (var i = 0;i<model_year_data.length;i++){
            var findmodelid = {model_id : model_year_data[i]['model_id']};
            var model_data = await model_collection.find(findmodelid).toArray();

            var findbrandid = {brand_id : model_data[0]['brand_id']};
            var brand_data = await brand_collection.find(findbrandid).toArray();

            var findcartypeid = {car_type_id : model_data[0]['car_type_id']};
            var car_type_data = await car_type_collection.find(findcartypeid).toArray();

            var tempCar = {
                car_id: model_year_data[i]['model_year_id'],
                car_name: {
                    model_id:model_data[0]['model_id'], 
                    model:model_data[0]['model_name'], 
                    brand_id:brand_data[0]['brand_id'],
                    brand:brand_data[0]['brand_name'], 
                    year:model_year_data[i]['year']
                },
                category_id:car_type_data[0]['car_type_id'],
                category:car_type_data[0]['car_type_name'],
                main_image:model_year_data[i]['main_image'],
                header_image:model_year_data[i]['header_image'],
                description:model_year_data[i]['description']
            };
                
            findResult['cars'].push(tempCar);
        }

        return findResult;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

exports.getBrand = async function(id){
    try{
        await client.connect();
        const db = client.db("sample_cars");
        const collection = db.collection('brand');

        doc = {brand_id: id};
        const findResult = await collection.find(doc).toArray();
        if(findResult.length == 1){
            return findResult[0];
        }
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    return false;
}

exports.getBrands = async function(){
    try{
        await client.connect();
        const db = client.db("sample_cars");
        const collection = db.collection('brand');

        const findResult = await collection.find({}).toArray();
        return {brands: findResult};
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

exports.getCarType = async function(id){
    try{
        await client.connect();
        const db = client.db("sample_cars");
        const collection = db.collection('car_type');

        doc = {car_type_id: id};
        const findResult = await collection.find(doc).toArray();
        if(findResult.length == 1){
            return findResult[0];
        }
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    return false;
}

exports.getCarTypes = async function(){
    try{
        await client.connect();
        const db = client.db("sample_cars");
        const collection = db.collection('car_type');

        const findResult = await collection.find({}).toArray();
        return {carTypes: findResult};
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

exports.getModel = async function(id){
    try{
        await client.connect();
        const db = client.db("sample_cars");
        const collection = db.collection('model');

        doc = {model_id: id};
        const findResult = await collection.find(doc).toArray();
        if(findResult.length == 1){
            return findResult[0];
        }
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    return false;
}

exports.getModels = async function(){
    try{
        await client.connect();
        const db = client.db("sample_cars");
        const collection = db.collection('model');

        const findResult = await collection.find({}).toArray();
        return {models: findResult};
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

exports.getModelYear = async function(id){
    try{
        await client.connect();
        const db = client.db("sample_cars");
        const collection = db.collection('model_year');

        doc = {model_year_id: id};
        const findResult = await collection.find(doc).toArray();
        if(findResult.length == 1){
            return findResult[0];
        }
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    return false;
}

exports.getModelYears = async function(){
    try{
        await client.connect();
        const db = client.db("sample_cars");
        const collection = db.collection('model_year');

        const findResult = await collection.find({}).toArray();
        return findResult;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

//CAR UPDATE OPERATIONS
exports.updateCar = async function(json){
    try{
        await client.connect();
        const db = client.db("sample_cars");
        const collection = db.collection('model_year');

        var myquery = { model_year_id: json.model_year_id };

        // "main_image": "",
        // "header_image": "",
        // "description": "Very Cool Car",
        // "featured": false,
        // "quantity": 3
        var newvalues = { $set: {model_id: json.model_id, year: json.year } };
        await collection.updateOne(myquery, newvalues);
        return true;
    } catch (e) {
        console.error(e);
        return false;
    } finally {
        await client.close();
    }
}

///USER ADD OPERATIONS///
exports.addUser = async function(user, pw){
/*Changes
* username -> email
user_type
firstname & lastname
phone number
 */

    try{
        await client.connect();
        const db = client.db("sample_users");
        const collection = db.collection('user');
        var doc = {};

        if(await collection.countDocuments() == 0){
            doc = {user_id: 0, username: user, password: pw};
        } else {
            const query = {};
            const options = {
                //sort by user_id -> descending
                sort: { "user_id": -1 }
            };
            latestRecord = await collection.findOne(query, options);
            id = latestRecord.user_id + 1;
            doc = {user_id: id,  username: user, password: pw};
        }

        await collection.insertOne(doc);
    } catch (e) {
    console.error(e);
    } finally {
        await client.close();
    }
}

exports.checkUser = async function(user, pw){
    try{
        await client.connect();
        const db = client.db("sample_users");
        const collection = db.collection('user');

        doc = {username: user, password: pw};
        const findResult = await collection.find(doc).toArray();
        if(findResult.length == 1){
            return findResult[0];
        }
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    return false;
}





///UTILITY FUNCTIONS///
exists = async function(document, collection){
    try{
        const findResult = await collection.findOne(document, {});
        if(findResult != null){
            return true;
        }
    } catch (e) {
        console.error(e);
    }
    return false;
}