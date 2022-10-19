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
        const db = client.db("sample_training");
        //identify collection name (like MySQL table)
        const collection = db.collection('grades');
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




//figure out how to use any of this as template for pulling needed data out
// app.get("/items/:my_item", async (req, res) => {  -- line in main server class
//     let my_item = req.params.my_item;
//     let item = await client.db("my_db")
//                 .collection("my_collection")
//                 .findOne({my_item: my_item})

//     return res.json(item)   -- is converting a cursor as easy as res.json()?
// })