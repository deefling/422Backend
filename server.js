const express = require('express');
const server = express();

//allow cross-origin requests
const cors = require('cors');
server.use(cors({
    origin: '*'
    //TODO - change this to vercel at the very end
}));

//allow API users to access images directory
server.use('/images', express.static('images'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//Custom driver for our DB
const mongoDriver = require('./mongoDriver');

//TODO catch custom errors

//TODO api security - don't think this actually blocks anything
//need to modify it to only allow requests from certain IPs and from vercel app
server.use(function apiSecurity(req, res, next){
    let host = req.header("x-api-key");
    if(host == "mmm"){
        next();
    } else {
        var doc = {error:"unauthorized host detected"};
        res.json(doc);
    }
});

//activation of "main" method
server.listen(3001, api());

//"main" method
function api() {
    console.log('API has been booted up');

    ///TEMPLATES///
    server.post('/endpoint', (req, res) => {
        console.log('This is the template for a CREATE operation');
        res.send('This is the template for a CREATE operation');
    })
    server.get('/endpoint', (req, res) => {
        res.send('This is the template for a READ operation');
    })
    server.put('/endpoint', (req, res) => {
        console.log('This is the template for an UPDATE operation');
    })
    server.delete('/endpoint', (req, res) => {
        console.log('This is the template for an DELETE operation');
    })


    ///CAR INFO///
    server.get('/getCar/:id', (req, res) => { 
        var id = req.params.id;
        mongoDriver.getCar(id).then( (value) => {res.json(value);},);
    })

    server.get('/getCars', (req, res) => { 
        mongoDriver.getCars().then( (value) => {res.json(value);},);
    })

    server.get('/getCarsByProperties', (req, res) => { 
        var doc = req.body;
        mongoDriver.getCarsByProperties(doc).then( (value) => {res.json(value);},);
    })

    server.get('/getBrands', (req, res) => { 
        mongoDriver.getBrands().then( (value) => {res.json(value);},);
    })

    server.get('/getModels', (req, res) => { 
        mongoDriver.getModels().then( (value) => {res.json(value);},);
    })

    server.get('/getCarTypes', (req, res) => { 
        mongoDriver.getCarTypes().then( (value) => {res.json(value);},);
    })

    server.get('/getFeaturedCars', (req, res) => {
        mongoDriver.getFeaturedCars().then( (value) => {res.json(value);},);
    })

    server.get('/getFilters', (req, res) => {
        mongoDriver.getFilters().then ( (value) => {res.json(value);},);
    })

    //CAR ADD
    server.put("/addCar", (req, res) => {
        mongoDriver.addModelYear(req.body.model_id, req.body.year, req.body.main_image, req.body.header_image, req.body.description, req.body.featured, req.body.quantity)
            .then((value) => {
                if(value.name != null){
                    res.json({[value.name]:value.message});
                } else {
                    res.json({inserted:value});
                }
            });
    });

    //CAR UPDATE
    server.post("/updateCar", (req, res) =>{
        mongoDriver.updateCar(req.body).then(
            (value) => {res.json({updated:value});},
        )
    })

    ///USER INFO///

    server.post("/checkLogin", (req, res) =>{
        const user = req.body.username;
        const pw = req.body.password;
        mongoDriver.checkUser(user, pw).then(
            (value) => {res.json(value);},
        )
    })
}