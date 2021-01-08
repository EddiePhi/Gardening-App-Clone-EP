// Reference to Eddie P HW: WK-11 (Note-Taker)

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

// const db = require('../db/db.json');
const plantsDB = require('../db/plantsDB.json');
const weatherDB = require('../db/weatherDB.json');
const fs = require('fs');
const shortId = require('shortid'); // Assitance from Tutor Mazin Abed
var plotModel = require("../models/plotModel.js")
var plantModel = require("../models/plantModel.js")

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  // duplicate GET, POST, and DELETE method for /plants
  app.get("/api/plants", function(req, res) {
    // fs.readFile('db/plantsDB.json', function(err, data){
    //   if(err) throw err;
    //   let notes = JSON.parse(data);
    //   return res.json(notes);
    // });

    plantModel.findAll({})
    .then(function(results) {
    // results are available to us inside the .then
    res.json(results);
    })
    .catch((error) => {
      throw error;
    });
  });

  app.post("/api/plants", function (req, res) {
    //Should receive a new note to save on the request body, 
    // fs.readFile('db/plantsDB.json', function(err, data){
    //   if(err) throw err;
    //   let notes = JSON.parse(data);
    //   const newNote = {
    //     title: req.body.title,
    //     text: req.body.text,
    //     id: shortId.generate()
    //   };
    
    //   console.log(plantsDB)
    //   //add it to the `plantsDB.json` file, 
    //   notes.push(newNote);
    //   //and then return the new note to the client.
    //   fs.writeFile('db/plantsDB.json', JSON.stringify(notes, null, 2), (err) => {
    //     if(err) throw err;
    //     res.send('200');
    //   })
    // });

    console.log(req.body)

    plantModel.create({
      plant_name: req.body.plant_name,
      plant_facts: req.body.plant_facts,
    })
    .then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    })
    .catch((error) => {
      throw error;
    });
  });

  // Express Route Params: https://www.youtube.com/watch?v=MuMs1pLuT7I
  app.delete("/api/plants/:id", function (req, res) {
    //In order to delete a note, you'll need to read all notes from the `db.json` file, 
    // fs.readFile('db/plantsDB.json', function(err, data){
    //   const deleteNotes = req.params.id;
    //   if(err) throw err;
    //   let notes = JSON.parse(data);
    //   //This means you'll need to find a way to give each note a unique `id` when it's saved.
    //   //remove the note with the given `id` property, 
    //   for (let i = 0; i < notes.length; i++) {
    //     if(notes[i].id === deleteNotes){
    //       notes.splice(i, 1);
    //     };
    //   };
    //   //and then rewrite the notes to the `db.json` file.
    //   fs.writeFile('db/plantsDB.json', JSON.stringify(notes, null, 2), (err) => {
    //     if(err) throw err;
    //     res.send('200');
    //   });
    // });

    plantModel.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    })
    .catch((error) => {
      throw error;
    });

  });
  // duplicate for /plants end


// duplicate GET, POST, and DELETE method for /plot
app.get("/api/plot", function(req, res) {
  plotModel.findAll({})
  .then(function(results) {
    // results are available to us inside the .then
    res.json(results);
  })
  .catch((error) => {
    throw error;
  });
});

app.post("/api/plot", function (req, res) {
    console.log(req.body)

    plotModel.create({
      plot_name: req.body.plot_name,
      plot_rows: req.body.plot_rows,
      plot_columns: req.body.plot_columns,
    })
    .then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    })
    .catch((error) => {
      throw error;
    });
});

// Express Route Params: https://www.youtube.com/watch?v=MuMs1pLuT7I
app.delete("/api/plot/:id", function (req, res) {
  plotModel.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function(results) {
    // results are available to us inside the .then
    res.json(results);
  })
  .catch((error) => {
    throw error;
  });
});
// duplicate for /plot end




// duplicate GET, POST, and DELETE method for /weather
app.get("/api/weather", function(req, res) {
  fs.readFile('db/weatherDB.json', function(err, data){
    if(err) throw err;
    let notes = JSON.parse(data);
    return res.json(notes);
  });
});

app.post("/api/weather", function (req, res) {
  //Should receive a new note to save on the request body, 
  fs.readFile('db/weatherDB.json', function(err, data){
    if(err) throw err;
    let notes = JSON.parse(data);
    const newNote = {
      currentDate: req.body.currentDate,
      id: shortId.generate()
    };
  
    console.log(weatherDB)
    //add it to the `plantsDB.json` file, 
    notes.push(newNote);
    //and then return the new note to the client.
    fs.writeFile('db/weatherDB.json', JSON.stringify(notes, null, 2), (err) => {
      if(err) throw err;
      res.send('200');
    })
  });
});

// Express Route Params: https://www.youtube.com/watch?v=MuMs1pLuT7I
app.delete("/api/weather/:id", function (req, res) {
  //In order to delete a note, you'll need to read all notes from the `db.json` file, 
  fs.readFile('db/weatherDB.json', function(err, data){
    const deleteNotes = req.params.id;
    if(err) throw err;
    let notes = JSON.parse(data);
    //This means you'll need to find a way to give each note a unique `id` when it's saved.
    //remove the note with the given `id` property, 
    for (let i = 0; i < notes.length; i++) {
      if(notes[i].id === deleteNotes){
        notes.splice(i, 1);
      };
    };
    //and then rewrite the notes to the `db.json` file.
    fs.writeFile('db/weatherDB.json', JSON.stringify(notes, null, 2), (err) => {
      if(err) throw err;
      res.send('200');
    });
  });
});
// duplicate for /weather end

// end of module.exports  
};