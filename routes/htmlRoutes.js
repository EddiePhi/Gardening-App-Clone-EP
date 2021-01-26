// ===============================================================================
// DEPENDENCIES
// ===============================================================================
const path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // Route to Plants page
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  // Custom html routes
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/landingpage.html"));
  });

  app.get("/plants", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/plants.html"));
  });

  // Route to landing page
  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/plotHomePage.html"));
  });
  // Route to forecast page
  app.get("/forecast", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/forecast.html"));
  });

  // Route to the Plots page
  app.get("/plot", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/plotpage.html"));
  });

  // If no matching route is found default to landing page/home page
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/landingpage.html"));
  });




  // Routes added for P3, WIP (EP)
  // Route to the Community page
  app.get("/community", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/community.html"));
  });


  // Route to the Farmer's Market locator page
  app.get("/locate-market", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/locate-market.html"));
  });


  // Route to the Gardening News page
  app.get("/news", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/news.html"));
  });


  // Route to the Social Media integration page
  app.get("/social", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/social.html"));
  });


  // Route to the "Start New Plant" page (Possibly swap with Plants or Plots?)
  app.get("/start-new", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/start-new.html"));
  });


  // Route to the Plant recommendations page
  app.get("/what-to-grow", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/what-to-grow.html"));
  });

};


