// Reference to Eddie P HW: WK-11 (Note-Taker)

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const db = require('../db/db.json');
const plantsDB = require('../db/plantsDB.json');
const plotDB = require('../db/plotDB.json');
const weatherDB = require('../db/weatherDB.json');
const fs = require('fs');
const shortId = require('shortid'); // Assitance from Tutor Mazin Abed
var Model = require("../models/models.js")

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
  app.get("/api/notes", function(req, res) {
    fs.readFile('db/db.json', function(err, data){
      if(err) throw err;
      let notes = JSON.parse(data);
      return res.json(notes);
    });
  });

  app.post("/api/notes", function (req, res) {
    //Should receive a new note to save on the request body, 
    fs.readFile('db/db.json', function(err, data){
      if(err) throw err;
      let notes = JSON.parse(data);
      const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: shortId.generate()
      };
    
      console.log(db)
      //add it to the `db.json` file, 
      notes.push(newNote);
      //and then return the new note to the client.
      fs.writeFile('db/db.json', JSON.stringify(notes, null, 2), (err) => {
        if(err) throw err;
        res.send('200');
      })
    });
  });

  // Express Route Params: https://www.youtube.com/watch?v=MuMs1pLuT7I
  app.delete("/api/notes/:id", function (req, res) {
    //In order to delete a note, you'll need to read all notes from the `db.json` file, 
    fs.readFile('db/db.json', function(err, data){
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
      fs.writeFile('db/db.json', JSON.stringify(notes, null, 2), (err) => {
        if(err) throw err;
        res.send('200');
      });
    });
  });








  // duplicate GET, POST, and DELETE method for /plants
  app.get("/api/plants", function(req, res) {
    fs.readFile('db/plantsDB.json', function(err, data){
      if(err) throw err;
      let notes = JSON.parse(data);
      return res.json(notes);
    });
  });

  app.post("/api/plants", function (req, res) {
    //Should receive a new note to save on the request body, 
    fs.readFile('db/plantsDB.json', function(err, data){
      if(err) throw err;
      let notes = JSON.parse(data);
      const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: shortId.generate()
      };
    
      console.log(plantsDB)
      //add it to the `plantsDB.json` file, 
      notes.push(newNote);
      //and then return the new note to the client.
      fs.writeFile('db/plantsDB.json', JSON.stringify(notes, null, 2), (err) => {
        if(err) throw err;
        res.send('200');
      })
    });
  });

  // Express Route Params: https://www.youtube.com/watch?v=MuMs1pLuT7I
  app.delete("/api/plants/:id", function (req, res) {
    //In order to delete a note, you'll need to read all notes from the `db.json` file, 
    fs.readFile('db/plantsDB.json', function(err, data){
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
      fs.writeFile('db/plantsDB.json', JSON.stringify(notes, null, 2), (err) => {
        if(err) throw err;
        res.send('200');
      });
    });
  });
  // duplicate for /plants end


// duplicate GET, POST, and DELETE method for /plot
app.get("/api/plot", function(req, res) {
  // fs.readFile('db/plotDB.json', function(err, data){
  //   if(err) throw err;
  //   let notes = JSON.parse(data);
  //   return res.json(notes);
  // });


  Model.findAll({})
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

    Model.create({
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



  // fs.readFile('db/weatherDB.json', function(err, data){
  //   if(err) throw err;
  //   let notes = JSON.parse(data);
  //   const newNote = {
  //     currentDate: req.body.currentDate,
  //     id: shortId.generate()
  //   };
  
  //   console.log(weatherDB)
  //   //add it to the `plantsDB.json` file, 
  //   notes.push(newNote);
  //   //and then return the new note to the client.
  //   fs.writeFile('db/weatherDB.json', JSON.stringify(notes, null, 2), (err) => {
  //     if(err) throw err;
  //     res.send('200');
  //   })
  // });
});

// Express Route Params: https://www.youtube.com/watch?v=MuMs1pLuT7I
app.delete("/api/plot/:id", function (req, res) {
  //In order to delete a note, you'll need to read all notes from the `db.json` file, 
  // fs.readFile('db/plotDB.json', function(err, data){
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
  //   fs.writeFile('db/plotDB.json', JSON.stringify(notes, null, 2), (err) => {
  //     if(err) throw err;
  //     res.send('200');
  //   });
  // });


  Model.destroy({
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



  // Copied from WK 14 Act 03-Chirpy-Sequelize VERIFY FIRST ARGUMENT PATHS FOR GET AND POST
  app.get("/api/all", function(req, res) {

    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Model.findAll({
      where: {
        plot_name: req.params.plot_name,
      },
    })
    .then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    })
    .catch((error) => {
      throw error;
    });

  });

  // Add a chirp
  app.post("/api/new", function(req, res) {

    console.log("Plot Data:");
    console.log(req.body);

    Model.create({
      plot_name: req.body.plot_name,
      plot_rows: req.body.plot_rows,
      plot_columns: req.body.plot_columns
    })
    .then(function(results) {
      // `results` here would be the newly created chirp
      res.json(results);
    })
    .catch((error) => {
      throw error;
    });

  });
// end of module.exports  
};