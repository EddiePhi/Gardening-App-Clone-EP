module.exports = function (sequelize, DataTypes) {
  var Locations = sequelize.define("Locations", {
    plot_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isNumeric: true,
    },
    //naming convention: row,col
    coordinates: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isNumeric: true,
    },
  });

  Locations.associate = function (models) {
    // We're saying that a location should belong to an Plot
    // A location can't be created without an plot due to the foreign key constraint
    Locations.belongsTo(models.Plots, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Locations;
};
