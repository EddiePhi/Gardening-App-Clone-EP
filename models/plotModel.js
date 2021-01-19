module.exports = function (sequelize, DataTypes) {
  var Plots = sequelize.define("Plots", {
    plot_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1, 30] },
    },
    plot_rows: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1, max: 5 },
    },
    plot_columns: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1, max: 5 },
    },
  });
  return Plots;
};
