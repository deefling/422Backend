const { application } = require('express');
const express = require('express');
const server = express();

server.listen(3000, function() {
    console.log('listening on 3000')

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


})