const { authCM } = require("../models");

const authCMData = [
  {
    email: "davidjortizmusic@gmail.com",
  },
];

const seedAuthCM = () => authCM.bulkCreate(authCMData);

module.exports = seedAuthCM;
