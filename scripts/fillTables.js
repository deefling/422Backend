const mongoDriver = require('../mongoDriver');

run();

async function run() {
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
    await mongoDriver.addBrand("Ford");
    await mongoDriver.addBrand("Toyota");


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
    await mongoDriver.addModel("AMG GT Coupé", 0, 4);
    await mongoDriver.addModel("X7", 1, 1);
    await mongoDriver.addModel("Pilot", 9, 1);
    await mongoDriver.addModel("Passport", 9, 1);
    await mongoDriver.addModel("Ecosport", 10, 1);
    await mongoDriver.addModel("Mustang", 10, 3);
    await mongoDriver.addModel("Fiesta", 10, 2);
    await mongoDriver.addModel("Corola", 11, 1);
    await mongoDriver.addModel("Camry", 11, 1);
    await mongoDriver.addModel("Auris", 11, 2);
    await mongoDriver.addModel("Roma", 7, 4);
    await mongoDriver.addModel("F8 Tributo", 7, 4);
    await mongoDriver.addModel("F8 Spider", 7, 4);
    await mongoDriver.addModel("X6 Sports Activity Coupe", 1, 0);
    await mongoDriver.addModel("4 Series Coupe", 1, 3);
    await mongoDriver.addModel("Phantom", 3, 4);
    await mongoDriver.addModel("Model S", 5, 3);
    await mongoDriver.addModel("720S Spider", 6, 3);
    await mongoDriver.addModel("F-40", 7, 3);
    await mongoDriver.addModel("Continental GT", 8, 4);
    await mongoDriver.addModel("Urus", 5, 0);


    //fill year with sample data
    await mongoDriver.addModelYear(0, "1997", "/images/civicMain.jpg", "/images/civicHeader.jpg", "Newer civic", true, 13);
    await mongoDriver.addModelYear(1, "2020", "/images/cybertruckMain.jpg", "/images/cybertruckHeader.jpg", "Older cybertruck", false, 25);
    await mongoDriver.addModelYear(2, "2013", "/images/p1Main.jpg", "/images/p1Header.jpg", "P1 cleaner than your church shoes", true, 5);
    await mongoDriver.addModelYear(3, "1925", "/images/silverGhostMain.jpg", "/images/silverGhostHeader.jpg", "If you hear clanking in the engine of a Rolls Royce...get your ears checked", true, 7);
    await mongoDriver.addModelYear(4, "2018", "/images/aventadorMain.jpg", "/images/aventadorHead.jpg", "Has scissor doors", false, 33);
    await mongoDriver.addModelYear(5, "2022", "/images/amggtMain.jpg", "/images/amggthead.jpg", "Pure German luxury", false, 4);
    await mongoDriver.addModelYear(6, "2018", "/images/bmwx7Main.jpg", "/images/bmwx7Head.jpg", "Luxurious and spacious", false, 12);
    await mongoDriver.addModelYear(7, "2022", "/images/pilotMain.jpg", "/images/pilotHead.jpg", "Ideal for family", false, 12);
    await mongoDriver.addModelYear(8, "2022", "/images/passportMain.jpg", "/images/passportHead.jpg", "For every terrain", false, 21);
    await mongoDriver.addModelYear(9, "2022", "/images/ecosportMain.jpg", "/images/ecosportHead.jpg", "Great for long trips", false, 2);
    await mongoDriver.addModelYear(10, "2019", "/images/mustangMain.jpg", "/images/mustangHead.jpg", "Best muscle car of all times", false, 34);
    await mongoDriver.addModelYear(11, "2022", "/images/fiestaMain.jpg", "/images/fiestaHead.jpg", "You passed your driving test in this?", false, 42);
    await mongoDriver.addModelYear(12, "2022", "/images/corolaMain.jpg", "/images/corolaHead.jpg", "Everybodies first car", false, 31);
    await mongoDriver.addModelYear(13, "2022", "/images/camryMain.jpg", "/images/camryHead.jpg", "Modern and eco-friendly", false, 29);
    await mongoDriver.addModelYear(14, "2022", "/images/aurisMain.jpg", "/images/aurisHead.jpg", "Great for modifying", false, 20);
    await mongoDriver.addModelYear(15, "2022", "/images/romaMain.jpg", "/images/romaHead.jpg", "The best car that you have never heard of", false, 3);
    await mongoDriver.addModelYear(16, "2021", "/images/f8tributoMain.jpg", "/images/f8tributoHead.jpg", "Every child's dream car", false, 2);
    await mongoDriver.addModelYear(17, "2019", "/images/f8spiderMain.jpg", "/images/f8spiderHead.jpg", "Ferrari and cabrio", false, 1);
    await mongoDriver.addModelYear(18, "2022", "/images/bmwX6Main.jpg", "/images/bmwX6Head.jpg", "Grass, road, dirt, snow? Can drive anywhere", false, 10);
    await mongoDriver.addModelYear(19, "2019", "/images/M4Main.jpg", "/images/M4Head.jpg", "It is not cabrio, but it will do it", false, 13);
    await mongoDriver.addModelYear(20, "2018", "/images/PhantomMain.jpg", "/images/PhantomHead.jpg", "You asked for luxury, here it is", false, 6);
    await mongoDriver.addModelYear(21, "2021", "/images/ModelSMain.jpg", "/images/ModelSHead.jpg", "For the Americans", false, 9);
    await mongoDriver.addModelYear(22, "2022", "/images/720sSpiderMain.jpg", "/images/720sSpiderHead.jpg", "With this, you will never be late", false, 4);
    await mongoDriver.addModelYear(23, "1987", "/images/F40Main.jpg", "/images/F40Head.jpg", "Everyone needs to have a classic in his garage", false, 2);
    await mongoDriver.addModelYear(24, "2019", "/images/ContinentalGTMain.jpg", "/images/ContinentalGTHead.jpg", "Never enough of luxury", false, 17);
    await mongoDriver.addModelYear(25, "2021", "/images/UrusrMain.jpg", "/images/UrusHead.jpg", "Lamborghini made a SUV? You have to try it", false, 16);
    // console.log(await mongoDriver.getModelYears());

    //fill package with sample data
    await mongoDriver.addPackage(0, "Standard Civic Package", 15000);
    await mongoDriver.addPackage(0, "Premium Civic Package", 25000);
    await mongoDriver.addPackage(2, "Standard P1 Package", 22000);
    await mongoDriver.addPackage(2, "Premium P1 Package", 30000);
    await mongoDriver.addPackage(5, "Standard AMG GT Package", 92500);
    await mongoDriver.addPackage(5, "Premium AMG GT Package", 110000);
    await mongoDriver.addPackage(6, "Standard X7 Package", 77850);
    await mongoDriver.addPackage(7, "Premium X7 Package", 90000);
    await mongoDriver.addPackage(7, "Standard Pilot Package", 37580);
    await mongoDriver.addPackage(7, "Premium Pilot Package", 45500);
    await mongoDriver.addPackage(8, "Standard Passport Package", 41100);
    await mongoDriver.addPackage(8, "Premium Passport Package", 49900);
    await mongoDriver.addPackage(9, "Standard Ecosport Package", 28990);
    await mongoDriver.addPackage(9, "Premium Ecosport Package", 34400);
    await mongoDriver.addPackage(10, "Standard Mustang Package", 27500);
    await mongoDriver.addPackage(10, "Premium Mustang Package", 42300);
    await mongoDriver.addPackage(11, "Standard Fiesta Package", 32290);
    await mongoDriver.addPackage(11, "Premium Fiesta Package", 38250);
    await mongoDriver.addPackage(12, "Standard Corola Package", 20400);
    await mongoDriver.addPackage(12, "Premium Corola Package", 31100);
    await mongoDriver.addPackage(13, "Standard Camry Package", 25800);
    await mongoDriver.addPackage(13, "Premium Camry Package", 35100);
    await mongoDriver.addPackage(14, "Standard Auris Package", 10000);
    await mongoDriver.addPackage(14, "Premium Auris Package", 16300);
    await mongoDriver.addPackage(15, "Standard Roma Package", 222630);
    await mongoDriver.addPackage(15, "Premium Roma Package", 283000);
    await mongoDriver.addPackage(16, "Standard F8 Tributo Package", 276000);
    await mongoDriver.addPackage(16, "Premium F8 Tributo Package", 312400);
    await mongoDriver.addPackage(17, "Standard F8 Tributo Package", 274000);
    await mongoDriver.addPackage(17, "Premium F8 Tributo Package", 320000);
    await mongoDriver.addPackage(18, "Standard X6 Package", 70000);
    await mongoDriver.addPackage(18, "Premium X6 Package", 80000);
    await mongoDriver.addPackage(19, "Standard M4 Package", 45000);
    await mongoDriver.addPackage(19, "Premium M4 Package", 60000);
    await mongoDriver.addPackage(20, "Standard Phantom Package", 420000);
    await mongoDriver.addPackage(20, "Premium Phantom Package", 450000);
    await mongoDriver.addPackage(21, "Standard ModelS Package", 140000);
    await mongoDriver.addPackage(21, "Premium ModelS Package", 160000);
    await mongoDriver.addPackage(22, "Standard 720s Spider Package", 330000);
    await mongoDriver.addPackage(22, "Premium 720s Spider Package", 300000);
    await mongoDriver.addPackage(23, "Standard F40 Package", 400000);
    await mongoDriver.addPackage(23, "Premium F40 Package", 420000);
    await mongoDriver.addPackage(24, "Standard Continental GT Package", 280000);
    await mongoDriver.addPackage(24, "Premium Continental GT Package", 300000);
    await mongoDriver.addPackage(25, "Standard Urus Package", 220000);
    await mongoDriver.addPackage(25, "Premium Urus Package", 240000);

    //fill package detail with sample data
    await mongoDriver.addPackageDetail(0, 0);
    await mongoDriver.addPackageDetail(0, 2);
    await mongoDriver.addPackageDetail(0, 6);
    await mongoDriver.addPackageDetail(1, 1);
    await mongoDriver.addPackageDetail(1, 3);
    await mongoDriver.addPackageDetail(1, 7);
    await mongoDriver.addPackageDetail(2, 0);
    await mongoDriver.addPackageDetail(2, 2);
    await mongoDriver.addPackageDetail(2, 6);
    await mongoDriver.addPackageDetail(3, 1);
    await mongoDriver.addPackageDetail(3, 3);
    await mongoDriver.addPackageDetail(3, 7);

    await mongoDriver.addPackageDetail(4, 0);
    await mongoDriver.addPackageDetail(4, 2);
    await mongoDriver.addPackageDetail(4, 6);
    await mongoDriver.addPackageDetail(5, 1);
    await mongoDriver.addPackageDetail(5, 3);
    await mongoDriver.addPackageDetail(5, 7);
    await mongoDriver.addPackageDetail(6, 0);
    await mongoDriver.addPackageDetail(6, 2);
    await mongoDriver.addPackageDetail(6, 6);
    await mongoDriver.addPackageDetail(7, 1);
    await mongoDriver.addPackageDetail(7, 3);
    await mongoDriver.addPackageDetail(7, 7);
    await mongoDriver.addPackageDetail(8, 0);
    await mongoDriver.addPackageDetail(8, 2);
    await mongoDriver.addPackageDetail(8, 6);
    await mongoDriver.addPackageDetail(9, 1);
    await mongoDriver.addPackageDetail(9, 3);
    await mongoDriver.addPackageDetail(9, 7);
    await mongoDriver.addPackageDetail(10, 0);
    await mongoDriver.addPackageDetail(10, 2);
    await mongoDriver.addPackageDetail(10, 6);
    await mongoDriver.addPackageDetail(11, 1);
    await mongoDriver.addPackageDetail(11, 3);
    await mongoDriver.addPackageDetail(11, 7);
    await mongoDriver.addPackageDetail(12, 0);
    await mongoDriver.addPackageDetail(12, 2);
    await mongoDriver.addPackageDetail(12, 6);
    await mongoDriver.addPackageDetail(13, 1);
    await mongoDriver.addPackageDetail(13, 3);
    await mongoDriver.addPackageDetail(13, 7);
    await mongoDriver.addPackageDetail(14, 0);
    await mongoDriver.addPackageDetail(14, 2);
    await mongoDriver.addPackageDetail(14, 6);
    await mongoDriver.addPackageDetail(15, 1);
    await mongoDriver.addPackageDetail(15, 3);
    await mongoDriver.addPackageDetail(15, 7);
    await mongoDriver.addPackageDetail(16, 0);
    await mongoDriver.addPackageDetail(16, 2);
    await mongoDriver.addPackageDetail(16, 6);
    await mongoDriver.addPackageDetail(17, 1);
    await mongoDriver.addPackageDetail(17, 3);
    await mongoDriver.addPackageDetail(17, 7);
    await mongoDriver.addPackageDetail(18, 0);
    await mongoDriver.addPackageDetail(18, 2);
    await mongoDriver.addPackageDetail(18, 6);
    await mongoDriver.addPackageDetail(19, 1);
    await mongoDriver.addPackageDetail(19, 3);
    await mongoDriver.addPackageDetail(19, 7);
    await mongoDriver.addPackageDetail(20, 0);
    await mongoDriver.addPackageDetail(20, 2);
    await mongoDriver.addPackageDetail(20, 6);
    await mongoDriver.addPackageDetail(21, 1);
    await mongoDriver.addPackageDetail(21, 3);
    await mongoDriver.addPackageDetail(21, 7);
    await mongoDriver.addPackageDetail(22, 0);
    await mongoDriver.addPackageDetail(22, 2);
    await mongoDriver.addPackageDetail(22, 6);
    await mongoDriver.addPackageDetail(23, 1);
    await mongoDriver.addPackageDetail(23, 3);
    await mongoDriver.addPackageDetail(23, 7);
    await mongoDriver.addPackageDetail(24, 0);
    await mongoDriver.addPackageDetail(24, 2);
    await mongoDriver.addPackageDetail(24, 6);
    await mongoDriver.addPackageDetail(25, 1);
    await mongoDriver.addPackageDetail(25, 3);
    await mongoDriver.addPackageDetail(25, 7);
    await mongoDriver.addPackageDetail(26, 0);
    await mongoDriver.addPackageDetail(26, 2);
    await mongoDriver.addPackageDetail(26, 6);
    await mongoDriver.addPackageDetail(27, 1);
    await mongoDriver.addPackageDetail(27, 3);
    await mongoDriver.addPackageDetail(27, 7);
    await mongoDriver.addPackageDetail(28, 0);
    await mongoDriver.addPackageDetail(28, 2);
    await mongoDriver.addPackageDetail(28, 6);
    await mongoDriver.addPackageDetail(29, 1);
    await mongoDriver.addPackageDetail(29, 3);
    await mongoDriver.addPackageDetail(29, 7);
    await mongoDriver.addPackageDetail(30, 0);
    await mongoDriver.addPackageDetail(30, 2);
    await mongoDriver.addPackageDetail(30, 6);
    await mongoDriver.addPackageDetail(31, 1);
    await mongoDriver.addPackageDetail(31, 3);
    await mongoDriver.addPackageDetail(31, 7);
    await mongoDriver.addPackageDetail(32, 0);
    await mongoDriver.addPackageDetail(32, 2);
    await mongoDriver.addPackageDetail(32, 6);
    await mongoDriver.addPackageDetail(33, 1);
    await mongoDriver.addPackageDetail(33, 3);
    await mongoDriver.addPackageDetail(33, 7);
    await mongoDriver.addPackageDetail(34, 0);
    await mongoDriver.addPackageDetail(34, 2);
    await mongoDriver.addPackageDetail(34, 6);
    await mongoDriver.addPackageDetail(35, 1);
    await mongoDriver.addPackageDetail(35, 3);
    await mongoDriver.addPackageDetail(35, 7);
    await mongoDriver.addPackageDetail(36, 0);
    await mongoDriver.addPackageDetail(36, 2);
    await mongoDriver.addPackageDetail(36, 6);
    await mongoDriver.addPackageDetail(37, 1);
    await mongoDriver.addPackageDetail(37, 3);
    await mongoDriver.addPackageDetail(37, 7);
    await mongoDriver.addPackageDetail(38, 0);
    await mongoDriver.addPackageDetail(38, 2);
    await mongoDriver.addPackageDetail(38, 6);
    await mongoDriver.addPackageDetail(39, 1);
    await mongoDriver.addPackageDetail(39, 3);
    await mongoDriver.addPackageDetail(39, 7);
    await mongoDriver.addPackageDetail(40, 0);
    await mongoDriver.addPackageDetail(40, 2);
    await mongoDriver.addPackageDetail(40, 6);
    await mongoDriver.addPackageDetail(41, 1);
    await mongoDriver.addPackageDetail(41, 3);
    await mongoDriver.addPackageDetail(41, 7);
    await mongoDriver.addPackageDetail(42, 0);
    await mongoDriver.addPackageDetail(42, 2);
    await mongoDriver.addPackageDetail(42, 6);
    await mongoDriver.addPackageDetail(43, 1);
    await mongoDriver.addPackageDetail(43, 3);
    await mongoDriver.addPackageDetail(43, 7);
    await mongoDriver.addPackageDetail(44, 0);
    await mongoDriver.addPackageDetail(44, 2);
    await mongoDriver.addPackageDetail(44, 6);
    await mongoDriver.addPackageDetail(45, 1);
    await mongoDriver.addPackageDetail(45, 3);
    await mongoDriver.addPackageDetail(45, 7);
    await mongoDriver.addPackageDetail(46, 0);
    await mongoDriver.addPackageDetail(46, 2);
    await mongoDriver.addPackageDetail(46, 6);
    await mongoDriver.addPackageDetail(47, 1);
    await mongoDriver.addPackageDetail(47, 3);
    await mongoDriver.addPackageDetail(47, 7);
    await mongoDriver.addPackageDetail(48, 0);
    await mongoDriver.addPackageDetail(48, 2);
    await mongoDriver.addPackageDetail(48, 6);
    await mongoDriver.addPackageDetail(49, 1);
    await mongoDriver.addPackageDetail(49, 3);
    await mongoDriver.addPackageDetail(49, 7);
    await mongoDriver.addPackageDetail(50, 0);
    await mongoDriver.addPackageDetail(50, 2);
    await mongoDriver.addPackageDetail(50, 6);
    await mongoDriver.addPackageDetail(51, 1);
    await mongoDriver.addPackageDetail(51, 3);
    await mongoDriver.addPackageDetail(51, 7);
    




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
