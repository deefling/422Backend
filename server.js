const express = require('express');
const server = express();

const mongoDriver = require('./mongoDriver');
const cors = require('cors');

server.use(cors({
    origin: '*'
}));

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

server.use('/images', express.static('images'));
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
        var listCars = {cars:[]};
        CarJSONobj['cars'].forEach((item) => {
            listCars['cars'].push({carID: item['id']});
        })
        res.json(listCars);
    })

    server.get('/getFeaturedCars', (req, res) => {
        var featuredCars = {cars:[]};
        featuredCars['cars'].push({carID: CarJSONobj['cars'][3]['id']});
        featuredCars['cars'].push({carID: CarJSONobj['cars'][2]['id']});
        featuredCars['cars'].push({carID: CarJSONobj['cars'][0]['id']});
        res.json(featuredCars);
    })

    server.get('/getLogins', (req, res) => {
        // HARDCODED
        //I plan to change this to take login creds & return bool rather than exposing passwords
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