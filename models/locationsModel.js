const db = require(".");

module.exports = function (sequelize, DataTypes) {
  var Locations = sequelize.define("Locations", {
    // plotId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    //naming convention: row,col
    coordinates: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // plant_name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: { len: [1, 30] },
    // },
  });

  // We're saying that a location should belong to an Plot
  // A location can't be created without an plot due to the foreign key constraint
  Locations.associate = function (models) {
    Locations.belongsTo(models.Plots, {
      onDelete: "cascade",
    });
  };

  Locations.associate = function (models) {
    Locations.belongsTo(models.Plants);
  };

  return Locations;
};
