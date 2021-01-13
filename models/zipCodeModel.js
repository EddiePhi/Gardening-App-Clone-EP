module.exports = function (sequelize, DataTypes) {
  var ZipCodes = sequelize.define("ZipCodes", {
    zip_codes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isInt: true,
      validate: { len: [5] },
    },
    plot_rows: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1, max: 10 },
    },
    plot_columns: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1, max: 10 },
    },
  });
  return ZipCodes;
};
