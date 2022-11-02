const { MongoClient } = require('mongodb');
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