// Reference to Eddie P HW: WK-11 (Note-Taker)

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
require("dotenv").config();

const fetch = require("isomorphic-fetch");
const weatherDB = require("../db/weatherDB.json");
const fs = require("fs");
const shortId = require("shortid"); // Assitance from Tutor Mazin Abed
// var plotModel = require("../models/plotModel.js")
// var plantModel = require("../models/plantModel.js")
// var zipCodeModel = require("../models/zipCodeModel.js")
var db = require("../models");
var passport = require("../config/passport");
const { query } = require("express");
const plotsDB = require('../db/plotsDB.json');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });


  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  
  
  //THIRD PARTY WEATHER FORECAST API ROUTE//
  //get a zipcode from the ZipCodes table then fetch the foorecast weather API and plug in the results from the zip
  //code get request
  app.get("/api/forecast/:id", function (req, res) {
    db.ZipCodes.findAll({ where: { id: req.params.id } })
      .then(function (results) {
        console.log(results);
        fetch(
          "https://api.openweathermap.org/data/2.5/forecast?zip=" +
            results[0].zip_codes +
            ",us&appid=" +
            process.env.API_KEY
        ).then(async function (weatherdata) {
          const data = await weatherdata.json();
          console.log(data);
          res.json(data);
        });
      })
      .catch((error) => {
        throw error;
      });
  });

  //THIRD PARTY WEATHER CURRENT API ROUTE//
  //get a zipcode from the ZipCodes table then fetch the current weather API and plug in the results from the zip
  //code get request
  app.get("/api/currentweather/:id", function (req, res) {
    db.ZipCodes.findAll({ where: { id: req.params.id } })
      .then(function (results) {
        fetch(
          "https://api.openweathermap.org/data/2.5/weather?zip=" +
            results[0].zip_codes +
            ",us&appid=" +
            process.env.API_KEY
        ).then(async function (weatherdata) {
          const data = await weatherdata.json();
          console.log(data);
          res.json(data);
        });
      })
      .catch((error) => {
        throw error;
      });
  });

  //PLANTS TABLE API ROUTES//

  //GET: Retrive all data from Plants table
  app.get("/api/plants", function (req, res) {
    db.Plants.findAll({})
      .then(function (results) {
        res.json(results);
      })
      .catch((error) => {
        throw error;
      });
  });

  //POST: Add New plant/column to Plants table
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

  //Delete: Revome a plant/row from Plants table
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

  //PLOT TABLE API REQUESTS//

  //GET: Retrive all Plots data. This includes associated locations and the plantsi n those locations
  app.get("/api/plot", function (req, res) {
    db.Plots.findAll({
      include: [
        {
          model: db.Locations,
          include: [
            {
              model: db.Plants,
            },
          ],
        },
      ],
    })
      .then(function (results) {
        res.json(results);
      })
      .catch((error) => {
        // throw error;
        res.json(error);
      });
  });












  //////////////////////////////////////////

  //DIRECT COPY OVER FROM NOTE-TAKER (TESTING)
  // app.get("/api/plots", function(req, res) {
  //   fs.readFile('./db/plotsDB.json', function(err, data){
  //     if(err) throw err;
  //     let plots = JSON.parse(data);
  //     return res.json(plots);
  //   });
  // });

  // app.post("/api/plots", function (req, res) {
  //   //Should receive a new note to save on the request body, 
  //   fs.readFile('./db/plotsDB.json', function(err, data){
  //     if(err) throw err;
  //     let plots = JSON.parse(data);
  //     const newPlot = {
  //       plot_name: req.body.plot_name,
  //       plot_rows: req.body.plot_rows,
  //       plot_columns: req.body.plot_columns,
  //       id: shortId.generate()
  //     };
    
  //     console.log(plotsDB)
  //     //add it to the `db.json` file, 
  //     plots.push(newPlot);
  //     //and then return the new note to the client.
  //     fs.writeFile('./db/plotsDB.json', JSON.stringify(plots, null, 2), (err) => {
  //       if(err) throw err;
  //       res.send('200');
  //     })
  //   });
  // });

  // // Express Route Params: https://www.youtube.com/watch?v=MuMs1pLuT7I
  // app.delete("/api/plots/:id", function (req, res) {
  //   //In order to delete a note, you'll need to read all notes from the `db.json` file, 
  //   fs.readFile('./db/plotsDB.json', function(err, data){
  //     const deletePlots = req.params.id;
  //     if(err) throw err;
  //     let plots = JSON.parse(data);
  //     //This means you'll need to find a way to give each note a unique `id` when it's saved.
  //     //remove the note with the given `id` property, 
  //     for (let i = 0; i < plots.length; i++) {
  //       if(plots[i].id === deletePlots){
  //         plots.splice(i, 1);
  //       };
  //     };
  //     //and then rewrite the notes to the `db.json` file.
  //     fs.writeFile('./db/plotsDB.json', JSON.stringify(plots, null, 2), (err) => {
  //       if(err) throw err;
  //       res.send('200');
  //     });
  //   });
  // });
  ////////////////////////////////////////////












  //POST: This adds a new plot ot he Plots table. This plot will be empty.
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

  //TODO: Add Plant to Plot Location (From Jonesified)
  // app.post("/api/plot/update/:plot_name", function (req, res) {
  //   console.log(req.body);
  //   db.Plots.update({
  //     data: req.plot,
  //     where: {
  //       name: req.params.plot_name,
  //     },
  //   });
  // });

  //TODO: Add Plant to Plot Location
  app.post("/api/plot/update/:plot_name", function (req, res) {
    console.log(req.body);
    db.Plots.update({
      data: req.plot,
      where: {
        name: req.params.plot_name,
      },
    });
  });

  //DELETE: Removes selected plot/row from Plots table. Will also remove any locations assiciated
  // to the selected plot.
  app.delete("/api/plot/:id", function (req, res) {
    console.log("-------------------------------");
    db.Plots.destroy({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: db.Locations,
          include: [
            {
              model: db.Plants,
            },
          ],
        },
      ],
    })
      .then(function (results) {
        res.json(results);
      })
      .catch((error) => {
        throw error;
      });
  });

  //GET: Retreive all data for one specified plot
  app.get("api/plot/:id", function (req, res) {
    db.Plots.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Locations],
    })
      .then(function (response) {
        res.json(response);
        console.log(response);
      })
      .catch((error) => {
        throw error;
      });
  });



  // app.get("/api/plot/:plot_name", function (req, res) {
  //   db.Plots.findOne({
  //     where: {
  //       plot_name: req.params.plot_name,
  //     },
  //     include: [db.Locations],
  //   })
  //     .then(function (response) {
  //       res.json(response);
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       throw error;
  //     });
  // });
  
  //ZIPCODES TABLE API REQUESTS//

  //GET: Retrieve all zip codes data from ZipCodes table
  app.get("/api/zipcode", function (req, res) {
    db.ZipCodes.findAll({})
      .then(function (results) {
        res.json(results);
      })
      .catch((error) => {
        throw error;
      });
  });

  //GET: Retreive a specified zip code
  app.get("/api/forcast/:zip_codes", function (req, res) {
    db.ZipCodes.findAll({
      where: {
        zip_codes: req.params.zip_codes,
      },
    })
      .then(function (results) {
        res.json(results);
      })
      .catch((error) => {
        throw error;
      });
  });

  //POST: Add zip code to ZipCodes table
  app.post("/api/zipcode", function (req, res) {
    console.log(req.body);

    db.ZipCodes.create({
      zip_codes: req.body.zip_codes,
    })
      .then(function (results) {
        res.json(results);
      })
      .catch((error) => {
        throw error;
      });
  });

  //DELETE: Remove user specified zip code entery/column from ZipCode table
  app.delete("/api/zipcode/:id", function (req, res) {
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
