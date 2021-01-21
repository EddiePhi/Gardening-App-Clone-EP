// ===============================================================================
// DEPENDENCIES
// ===============================================================================
const path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // Route to Plants page
  app.get("/plants", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/plants.html"));
  });
  // ?????
  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/plothomepage.html"));
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
};
