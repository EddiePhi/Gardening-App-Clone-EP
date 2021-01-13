// Reference from Week 13 Activity 16: MvcExample
// Set up MySQL connection.
var Sequelize = require("sequelize")

var sequelize = new Sequelize("gardening_DB", "root", "Password123", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Example copied from activity for Wk 14
// const query = "INSERT INTO department SET ?";
// connection.query(query, function(err, results, fields){
//   if (err) throw err;
//   console.log(results);
//   res.end();
// });

// Export connection for our ORM to use.
module.exports = sequelize;