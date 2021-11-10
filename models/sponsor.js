const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Sponsor extends Model {}

Sponsor.init(
  {
    sponsor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "uac",
        key: "uac_id",
      },
      defaultValue: 1,
    },
    sponsor_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "No Sponsor Selected",
    },
    address1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [5],
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
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    id_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    expiration_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    previous_sponsorship: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    previous_sponsorship_narrative: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    previous_address: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    primary_caregiver: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "sponsor",
  }
);

module.exports = Sponsor;
