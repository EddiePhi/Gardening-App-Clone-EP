module.exports = function (sequelize, DataTypes) {
  var ZipCodes = sequelize.define("ZipCodes", {
    zip_codes: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [5, 5] },
    },
  });
  return ZipCodes;
};
