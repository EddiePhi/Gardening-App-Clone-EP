// Reference to Eddie P HW: WK-11 (Note-Taker)

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const weatherDB = require("../db/weatherDB.json");
const fs = require("fs");
const shortId = require("shortid"); // Assitance from Tutor Mazin Abed
// var plotModel = require("../models/plotModel.js")
// var plantModel = require("../models/plantModel.js")
// var zipCodeModel = require("../models/zipCodeModel.js")
var db = require("../models");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API Requests

  // GET all data from Plants table
  app.get("/api/plants", function (req, res) {
    db.Plants.findAll({})
      .then(function (results) {
        res.json(results);
      })
      .catch((error) => {
        throw error;
      });
  });

  //Add New plant/column to Plants table
  app.post("/api/plants", function (req, res) {
    console.log(req.body);

    db.Plants.create({
      plant_name: req.body.plant_name,
      plant_facts: req.body.plant_facts,
      days_to_maturity: req.body.days_to_maturity,
      fruit_size_inches: req.body.fruit_size_inches,
      sun: req.body.sun,
      spread: req.body.spread,
      height: req.body.height,
    })
      .then(function (results) {
        res.json(results);
      })
      .catch((error) => {
        throw error;
      });
  });

  //Delete plant from Plants table
  app.delete("/api/plants/:id", function (req, res) {
    db.Plants.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(function (results) {
        res.json(results);
      })
      .catch((error) => {
        throw error;
      });
  });

  // GET all data from Plots table
  app.get("/api/plot", function (req, res) {
    db.Plots.findAll({})
      .then(function (results) {
        res.json(results);
      })
      .catch((error) => {
        throw error;
      });
  });

  //Add New plot/column to Plots table
  app.post("/api/plot", function (req, res) {
    console.log(req.body);

    db.Plots.create({
      plot_name: req.body.plot_name,
      plot_rows: req.body.plot_rows,
      plot_columns: req.body.plot_columns,
    })
      .then(function (results) {
        res.json(results);
      })
      .catch((error) => {
        throw error;
      });
  });

  //Delete user specified plot/column from Plots table
  app.delete("/api/plot/:id", function (req, res) {
    db.Plots.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(function (results) {
        res.json(results);
      })
      .catch((error) => {
        throw error;
      });
  });

  //GET all zip codes from ZipCodes table
  app.get("/api/forecast", function (req, res) {
    db.ZipCodes.findAll({})
      .then(function (results) {
        res.json(results);
      })
      .catch((error) => {
        throw error;
      });
  });

  //Add zip code to ZipCodes table
  app.post("/api/forecast", function (req, res) {
    console.log(req.body);

    db.ZipCodes.create({
      zip_code: req.body.zip_code,
    })
      .then(function (results) {
        res.json(results);
      })
      .catch((error) => {
        throw error;
      });
  });

  //Delete user specified zip code entery/column from ZipCode table
  app.delete("/api/forecast/:id", function (req, res) {
    db.ZipCodes.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(function (results) {
        res.json(results);
      })
      .catch((error) => {
        throw error;
      });
  });
};
