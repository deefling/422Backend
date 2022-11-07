const mongoDriver = require('../mongoDriver');

run();

async function run(){
    await mongoDriver.resetDatabase();

    //fill brand table with sample data
    await mongoDriver.addBrand("Mercedes");
    await mongoDriver.addBrand("BMW");
    await mongoDriver.addBrand("Range Rover");
    await mongoDriver.addBrand("Rolls Royce");
    await mongoDriver.addBrand("Lambourghini");
    await mongoDriver.addBrand("Tesla");
    await mongoDriver.addBrand("McLaren");
    await mongoDriver.addBrand("Ferarri");
    await mongoDriver.addBrand("Bentley");

    //fill car_type table with sample data
    await mongoDriver.addCarType("SUV");
    await mongoDriver.addCarType("Sedan");
    await mongoDriver.addCarType("Compact");

    //fill model with sample data
    await mongoDriver.addModel("civic", 1, 1);
    await mongoDriver.addModel("cybertruck", 4, 1);

    //fill year with sample data
    await mongoDriver.addYear(1, "2020", "/images/cybertruckMain.jpg", "/images/cybertruckHeader.jpg", "Older cybertruck", false, 25);
}
