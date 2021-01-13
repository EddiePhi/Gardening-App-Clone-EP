// Where Sequelize code goes to connect to DB.

// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var plantModel = sequelize.define(
  "plants",
  {
    plant_name: Sequelize.STRING,
    plant_facts: Sequelize.STRING,
  },

  { freezeTableName: true }
);

// Syncs with DB
plantModel.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = plantModel;
