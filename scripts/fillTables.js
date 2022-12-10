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
    await mongoDriver.addModel("Civic", 9, 1);
    await mongoDriver.addModel("Cybertruck", 5, 0);
    await mongoDriver.addModel("P1", 6, 3);
    await mongoDriver.addModel("Silver Ghost", 3, 4);
    await mongoDriver.addModel("Aventador", 4, 3);
    await mongoDriver.addModel("Accord", 9, 1);
    await mongoDriver.addModel("Breeze", 9, 0);

    //fill year with sample data
    await mongoDriver.addModelYear(0, "1997", "/images/civicMain.jpg", "/images/civicHeader.jpg", "Newer civic", true, 13);
    await mongoDriver.addModelYear(1, "2020", "/images/cybertruckMain.jpg", "/images/cybertruckHeader.jpg", "Older cybertruck", false, 25);
    await mongoDriver.addModelYear(2, "2013", "/images/p1Main.jpg", "/images/p1Header.jpg", "P1 cleaner than your church shoes", true, 5);
    await mongoDriver.addModelYear(3, "1925", "/images/silverGhostMain.jpg", "/images/silverGhostHeader.jpg", "If you hear clanking in the engine of a Rolls Royce...get your ears checked", true, 7);
    await mongoDriver.addModelYear(4, "2018", "/images/aventadorMain.jpg", "/images/aventadorHead.jpg", "Has scissor doors", false, 33);
    // console.log(await mongoDriver.getModelYears());

    //fill package with sample data
    await mongoDriver.addPackage(0, "Standard Civic Package", 15000);
    await mongoDriver.addPackage(0, "Premium Civic Package", 25000);
    await mongoDriver.addPackage(2, "Standard P1 Package", 22000);
    await mongoDriver.addPackage(2, "Premium P1 Package", 30000);


    //fill package detail with sample data
    await mongoDriver.addPackageDetail(0,0);
    await mongoDriver.addPackageDetail(0,2);
    await mongoDriver.addPackageDetail(0,6);
    await mongoDriver.addPackageDetail(1,1);
    await mongoDriver.addPackageDetail(1,3);
    await mongoDriver.addPackageDetail(1,7);
    await mongoDriver.addPackageDetail(2,0);
    await mongoDriver.addPackageDetail(2,2);
    await mongoDriver.addPackageDetail(2,6);
    await mongoDriver.addPackageDetail(3,1);
    await mongoDriver.addPackageDetail(3,3);
    await mongoDriver.addPackageDetail(3,7);

    //fill part with sample data
    await mongoDriver.addPart(0, "2.0-liter four-cylinder");
    await mongoDriver.addPart(0, "1.5-liter four-cylinder turbocharged");
    await mongoDriver.addPart(1, "Steel Wheels");
    await mongoDriver.addPart(1, "Alloy Wheels");
    await mongoDriver.addPart(1, "Forged & Cast Wheels");
    await mongoDriver.addPart(1, "Split Rim Wheels");
    await mongoDriver.addPart(2, "Halogen headlights");
    await mongoDriver.addPart(2, "LED headlights");
    await mongoDriver.addPart(2, "HID headlights");

    //fill part_type with sample data
    await mongoDriver.addPartType("Engine");
    await mongoDriver.addPartType("Wheels");
    await mongoDriver.addPartType("Headlights");


    //adding users
    await mongoDriver.addUser("root", false, "Test", "User", "password", "010521355");
    await mongoDriver.addUser("admin", true, "Real", "Admin", "password", "524655216");

    //add default purchase
    await mongoDriver.addOrder(0, 0, 1, "2022-12-10", 25000, 0, 25000);
    
}
