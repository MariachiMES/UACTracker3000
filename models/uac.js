const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class UAC extends Model {}

UAC.init(
  {
    uac_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sponsor_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    a_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [9],
      },
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    coo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    intake: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    case_manager: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    FRP: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    ARI: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    POR: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    list_of_bcs: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sponsor_bgc: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    sponsor_id: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    sponsor_fp: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    hhm_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hhm_checks: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    SIR: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sex_offender_check: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "UAC",
  }
);

module.exports = UAC;
