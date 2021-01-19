USE gardening_db;

INSERT INTO plants (plant_name, plant_facts, days_to_maturity, fruit_size_inches, sun, spread, height, createdAt, updatedAt)

VALUES ("Tomato", "Tomatoes are rich in lycopene, an antioxidant that is good for the heart and effective against certain cancers.",
 49, 3, "Full Sun", 55, 38, NOW(), NOW()),
("Lettuce", "Lettuce grows best in cool weather. 
Use succession planting to maximize and extend harvests", 45, 0, "Full Sun, Part Sun", 6, 12, NOW(), NOW()),
("Jalepeno Pepper", "Disease-resistant plants yield early and heavy harvests of 4 inch peppers from early to late season",
 58, 3, "Full Sun", 19, 28, NOW(), NOW()),
("Cucumber", "Best grown on a fence or our space-saving Trellis Netting", 58, 7, "Full Sun", 56, 7, NOW(), NOW()),
("Rosemary", "Start seed early indoors. Plants tolerate light frost; set outside early", 90, 0, "Full Sun", 18, 28, NOW(), NOW()),
("Sage", "Sage leaf tea is useful in treating colds and for aiding digestion.", 90, 0, "Full Sun", 20, 18, NOW(), NOW()),
("Dill", "TUse seeds to flavor pickles and the leaves to brighten salads,
 soups, omelets and vegetables.", 50, 0, "Full Sun", 20, 36, NOW(), NOW())


INSERT INTO plots (plot_name, plot_rows, plot_columns, createdAt, updatedAt)
VALUES ("Test plot", 1, 1, NOW(), NOW() )


INSERT INTO zipcodes (zip_code, createdAt, updatedAt)
VALUES ("03857", NOW(), NOW());

