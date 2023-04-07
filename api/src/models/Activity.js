const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("activity", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    duration: {
      type: DataTypes.INTEGER,
    },
    season: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
