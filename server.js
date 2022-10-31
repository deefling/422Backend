const express = require('express');
const server = express();

const mongoDriver = require('./mongoDriver');

const CarJSONobj = {cars: [
    {
        id: "1", 
        image: "LINK",
        car_name: {
            model: "Civic",
            brand: "Honda",
            year: "1997"
        }
    },
    {
        id: "2", 
        image: "LINK",
        car_name: {
            model: "Cybertruck",
            brand: "Tesla",
            year: "2023"
        }
    },
    {
        id: "3", 
        image: "LINK",
        car_name: {
            model: "P1",
            brand: "McLaren",
            year: "2013"
        }
    },
    {
        id: "4", 
        image: "LINK",
        car_name: {
            model: "Silver Ghost",
            brand: "Rolls Royce",
            year: "1925"
        }
    },
    {
        id: "5", 
        image: "LINK",
        car_name: {
            model: "Aventador",
            brand: "Lamborghini",
            year: "2018"
        }
    }
]};


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

    server.get('/getCars', (req, res) => { 
        res.json(CarJSONobj);
    })

    server.get('/getFeaturedCars', (req, res) => {
        var featuredCars = {cars:[]};
        featuredCars['cars'].push(CarJSONobj['cars'][1]);
        featuredCars['cars'].push(CarJSONobj['cars'][0]);
        featuredCars['cars'].push(CarJSONobj['cars'][4]);
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