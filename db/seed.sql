INSERT INTO plots (id, plot_name, plot_rows, plot_columns, createdAt, updatedAt)
VALUES (DEFAULT, "new plot", 1, 1, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()), (DEFAULT, "plot 2", 2, 2, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()), (DEFAULT, "big plot", 10, 10, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

INSERT INTO plants (id, plant_name, plant_facts, createdAt, updatedAt)
VALUES (DEFAULT, "Tomato", "Red", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()), (DEFAULT, "Pepper", "Various Colors", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()), (DEFAULT, "Lettuce", "Green", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

INSERT INTO zip_codes (id, zip_code, createdAt, updatedAt)
VALUES (DEFAULT, "03857", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
