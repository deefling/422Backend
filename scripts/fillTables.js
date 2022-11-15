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
    await mongoDriver.addBrand("Honda");
    // console.log(await mongoDriver.getBrands());

    //fill car_type table with sample data
    await mongoDriver.addCarType("SUV");
    await mongoDriver.addCarType("Sedan");
    await mongoDriver.addCarType("Compact");
    await mongoDriver.addCarType("Sports Car");
    await mongoDriver.addCarType("Luxury Car");

    //fill model with sample data
    await mongoDriver.addModel("Civic", 9, 2);
    await mongoDriver.addModel("Cybertruck", 5, 0);
    await mongoDriver.addModel("P1", 6, 3);
    await mongoDriver.addModel("Silver Ghost", 3, 4);
    await mongoDriver.addModel("Aventador", 4, 3);

    //fill year with sample data
    await mongoDriver.addModelYear(0, "1997", "/images/civicMain.jpg", "/images/civicHeader.jpg", "Newer civic", false, 13);
    await mongoDriver.addModelYear(1, "2020", "/images/cybertruckMain.jpg", "/images/cybertruckHeader.jpg", "Older cybertruck", false, 25);
    await mongoDriver.addModelYear(3, "2013", "/images/p1Main.jpg", "/images/p1Header.jpg", "P1 cleaner than your church shoes", false, 5);
    await mongoDriver.addModelYear(4, "1925", "/images/silverGhostMain.jpg", "/images/silverGhostHeader.jpg", "If you hear clanking in the engine of a Rolls Royce...get your ears checked", false, 7);
    await mongoDriver.addModelYear(4, "2018", "/images/aventadorMain.jpg", "/images/aventadorHead.jpg", "Has scissor doors", false, 33);
    // console.log(await mongoDriver.getModelYears());

    //adding users
    await mongoDriver.addUser("root", "password");
    await mongoDriver.addUser("admin", "password");

}
