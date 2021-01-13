// Where Sequelize code goes to connect to DB.

// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var plotModel = sequelize.define(
  "plots",
  {
    plot_name: Sequelize.STRING,
    plot_rows: Sequelize.INTEGER,
    plot_columns: Sequelize.INTEGER,
  },

  { freezeTableName: true }
);

// Syncs with DB
plotModel.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = plotModel;
