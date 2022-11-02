const mongoDriver = require('../mongoDriver');

run();

async function run(){
    await mongoDriver.resetDatabase();
    
    await mongoDriver.addBrand("Mercedes");
    await mongoDriver.addBrand("BMW");
    await mongoDriver.addBrand("Range Rover");
    await mongoDriver.addBrand("Rolls Royce");
    await mongoDriver.addBrand("Lambourghini");
    await mongoDriver.addBrand("Tesla");
    await mongoDriver.addBrand("McLaren");
    await mongoDriver.addBrand("Ferarri");
    await mongoDriver.addBrand("Bentley");

}
