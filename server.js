const { application } = require('express');
const express = require('express');
const server = express();

server.listen(3000, function() {
    console.log('listening on 3000')

    server.get('/', (req, res) => {
        res.send('Hello World');
    })
})