const express = require('express');
const server = express();

const { MongoClient } = require('mongodb');
const MONGO_CONNECTION_STRING = "mongodb+srv://root:TargaryensFTW@422databse.axyczfl.mongodb.net/?retryWrites=true&w=majority";
const uri = MONGO_CONNECTION_STRING;
const client = new MongoClient(uri);






// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://root:<password>@422databse.axyczfl.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });




//figure out how to use this as template
// app.get("/items/:my_item", async (req, res) => {
//     let my_item = req.params.my_item;
//     let item = await client.db("my_db")
//                 .collection("my_collection")
//                 .findOne({my_item: my_item})

//     return res.json(item)
// })


//CALLBACKS ARE DEPRECATED
// figure out how to do the same thing with async/await/promises
// client.connect(err => {
//     if(err){ console.error(err); return false;}
//     // connection to mongo is successful, listen for requests
//     server.listen(3000, function() {
//         console.log('listening on 3000')
//     })
// });


async function bootDB(){
    try{
        console.log("test0");
        await client.connect();
        console.log("test1");
        const db = client.db("sample_training");
        console.log("test2");
        const collection = db.collection('grades');
        console.log("test3");
        const findResult = await collection.find({}).toArray();
        console.log("test4");
        console.log('Found documents =>', findResult);
    } catch (e) {
    console.error(e);
    } finally {
        await client.close();
    }
}

server.listen(3000, api());
    
function api() {
    console.log('API has been booted up');
    bootDB();

    server.post('/endpoint', (req, res) => {
        //can be triggered by HTML form or JS AJAX/JS fetch
        //form action attribute will be the endpoint in params
        console.log('This is the template for a CREATE operation');
    })

    server.get('/endpoint', (req, res) => {
        res.send('This is the template for a READ operation');
    })

    server.put('/endpoint', (req, res) => {
        //can be triggered by HTML form or JS AJAX/JS fetch
        //form action attribute will be the endpoint in params
        console.log('This is the template for an UPDATE operation');
    })

    server.delete('/endpoint', (req, res) => {
        //can be triggered by HTML form or JS AJAX/JS fetch
        //form action attribute will be the endpoint in params
        console.log('This is the template for an DELETE operation');
    })

}