module.exports = function (sequelize, DataTypes) {
  var ZipCodes = sequelize.define("ZipCodes", {
    zip_codes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isInt: true,
      validate: { len: [5] },
    },
  });
  return ZipCodes;
};
