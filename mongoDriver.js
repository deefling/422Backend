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
        const db = client.db("sample_cars");
        await db.collection("brand").deleteMany();
        await db.collection("carType").deleteMany();
        await db.collection("model").deleteMany();
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

exports.addBrand = async function(name){
    try{
        await client.connect();
        const db = client.db("sample_cars");
        const collection = db.collection('brand');
        var doc = {};

        if(await collection.countDocuments() == 0){
            doc = {brand_id: 0, brand_name: name};
        } else {
            const query = {};
            const options = {
                //sort by brand_id -> descending
                sort: { "brand_id": -1 }
            };
            latestRecord = await collection.findOne(query, options);
            id = latestRecord.brand_id + 1;
            doc = {brand_id: id, brand_name: name};
        }

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



exports.addModel = async function(name, brand_id, car_type_id){
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
            doc = {model_id: id, model_name: name, brand_id, car_type_id};
        }

        await collection.insertOne(doc);
        // console.log(typeof ForeignKeyError);
        throw new ForeignKeyError("messagetest");
    } catch (e) {
    console.error(e);
    } finally {
        await client.close();
    }
}