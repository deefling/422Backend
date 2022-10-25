const express = require('express');
const server = express();

const mongoDriver = require('./mongoDriver');

server.listen(3000, api());
    
function api() {
    console.log('API has been booted up');
    mongoDriver.bootDB();

    server.post('/endpoint', (req, res) => {
        //can be triggered by HTML form or JS AJAX/JS fetch
        //form action attribute will be the endpoint in params
        console.log('This is the template for a CREATE operation');
    })

    server.get('/endpoint', (req, res) => {
        res.send('This is the template for a READ operation');
    })

    server.get('/getLogins', (req, res) => {
        // HARDCODED
        JSONobj = {stuff: [
            {
            id: "1", 
            email: "test@gmail.com",
            password: "983759345736jlhrbf38374"
            },
            {
                id: "2", 
                email: "fake@gmail.com",
                password: "43g6gh6iu45y64h6iu"
            },
            {
                id: "3", 
                email: "random@gmail.com",
                password: "hj4g6j6g878g6jh8g23lk45"
            }
        ]};
        res.json(JSONobj);
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