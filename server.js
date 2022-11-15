const express = require('express');
const server = express();

//allow cross-origin requests
const cors = require('cors');
server.use(cors({
    origin: '*'
}));

//allow API users to access images directory
server.use('/images', express.static('images'));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//Custom driver for our DB
const mongoDriver = require('./mongoDriver');

//Temporary values until DB is set up
const CarJSONobj = {cars: [
    {
        id: "1", 
        car_name: {
            model: "Civic",
            brand: "Honda",
            year: "1997"
        },
        category: "compact car",
        main_image: "/images/civicMain.jpg",
        header_image: "/images/civicHeader.jpg",
        description: "bla bla bla"
    },
    {
        id: "2", 
        car_name: {
            model: "Cybertruck",
            brand: "Tesla",
            year: "2023" 
        },
        category: "truck",
        main_image: "/images/cybertruckMain.jpg",
        header_image: "/images/cybertruckHeader.jpg",
        description: "bla bla bla"
    },
    {
        id: "3", 
        car_name: {
            model: "P1",
            brand: "McLaren",
            year: "2013"
        },
        category: "sports car",
        main_image: "/images/p1Main.jpg",
        header_image: "/images/p1Header.jpg",
        description: "bla bla bla"
    },
    {
        id: "4", 
        car_name: {
            model: "Silver Ghost",
            brand: "Rolls Royce",
            year: "1925"
        },
        category: "luxury car",
        main_image: "/images/silverGhostMain.jpg",
        header_image: "/images/silverGhostHeader.jpg",
        description: "bla bla bla"
    },
    {
        id: "5", 
        car_name: {
            model: "Aventador",
            brand: "Lamborghini",
            year: "2018"
        },
        category: "sports car",
        main_image: "/images/aventadorMain.jpg",
        header_image: "/images/aventadorHead.jpg",
        description: "bla bla bla"
    }
]};

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



    ///API CALLS///

    ///CAR INFO///
    server.get('/getCarDisplay/:id', (req, res) => { 
        var id = req.params.id - 1;

        var carDisplay = {
            car_name: CarJSONobj.cars[id].car_name,
            category: CarJSONobj.cars[id].category,
            main_image: CarJSONobj.cars[id].main_image,
            header_image: CarJSONobj.cars[id].header_image,
            description: CarJSONobj.cars[id].description
        }

        res.json(carDisplay);
    })

    server.get('/getCars', (req, res) => { 
        mongoDriver.getCars().then( (value) => {res.json(value);},);
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
        var featuredCars = {cars:[]};
        featuredCars['cars'].push({carID: CarJSONobj['cars'][3]['id']});
        featuredCars['cars'].push({carID: CarJSONobj['cars'][2]['id']});
        featuredCars['cars'].push({carID: CarJSONobj['cars'][0]['id']});
        res.json(featuredCars);
    })

    //CAR UPDATE
    server.post("/updateCar", (req, res) =>{

        mongoDriver.updateCar(req.body).then(
            (value) => {res.json(value);},
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