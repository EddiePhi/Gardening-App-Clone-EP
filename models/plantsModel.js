//Initializes the plants Table in the gardening_db database
//Creates a table with columns plant_name, plant_facts, days_to_maturity, fruit_size_inches, sun, spread, and height

module.exports = function (sequelize, DataTypes) {
  var Plants = sequelize.define("Plants", {
    plant_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1, 30] },
    },
    plant_facts: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1, 150] },
    },
    days_to_maturity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isFLoat: true,
    },
    fruit_size_inches: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isFloat: true,
    },
    sun: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1, 30] },
    },
    spread: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isNumeric: true,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isFloat: true,
    },
  });

  Plants.associate = function (models) {
    Plants.hasMany(models.Locations);
  };

  return Plants;
};
