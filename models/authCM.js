const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class authCM extends Model {}

authCM.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    hooks: {
      // Use the beforeCreate hook to work with data before a new instance is created
      beforeCreate: async (newUserData) => {
        // In this case, we are taking the user's email address, and making all letters lower case before adding it to the database.
        newUserData.email = await newUserData.email.toLowerCase();
        return newUserData;
      },
      // BeforeUpdate hook to make all of the characters lower case in an updated email address, before updating the database.
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.email = await updatedUserData.email.toLowerCase();
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "authCM",
  }
);

module.exports = authCM;
