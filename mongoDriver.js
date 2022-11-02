const { MongoClient } = require('mongodb');
//this is the connection info for our specific DB
//DB name = 422database
//user = root
//pw = TargaryensFTW
const MONGO_CONNECTION_STRING = "mongodb+srv://root:TargaryensFTW@422databse.axyczfl.mongodb.net/?retryWrites=true&w=majority";
const uri = MONGO_CONNECTION_STRING;
const client = new MongoClient(uri);


//it was advised (need to find source) that we open the db connection before actually listening on any ports
// that may require a class which doesn't work with current architecture. need to research this more.


//this method pulls from sample data on the db
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

exports.resetDatabase = async function(){
    try{
        await client.connect();
        //identify db name (probably will always be the same for our purposes)
        const db = client.db("sample_cars");

        await db.collection("brand").deleteMany();
        await db.collection("counters").deleteMany();

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

exports.addBrand = async function(name){
    try{
        await client.connect();
        //identify db name (probably will always be the same for our purposes)
        const db = client.db("sample_cars");
        //identify collection name (like MySQL table)
        const collection = db.collection('brand');

        var doc = {};
        console.log(await collection.countDocuments());

        if(await collection.countDocuments() == 0){
            doc = {brand_id: 0, brand_name: name};
        } else {
            const query = {};
            const options = {
                // sort matched documents in descending order by rating
                sort: { "brand_id": 1 }
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




//figure out how to use any of this as template for pulling needed data out
// app.get("/items/:my_item", async (req, res) => {  -- line in main server class
//     let my_item = req.params.my_item;
//     let item = await client.db("my_db")
//                 .collection("my_collection")
//                 .findOne({my_item: my_item})

//     return res.json(item)   -- is converting a cursor as easy as res.json()?
// })