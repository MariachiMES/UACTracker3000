const sequelize = require("../config/connection");
const { UAC, CaseManager, Sponsor } = require("../models");
const sponsorData = require("./sponsorData");
const seedUACs = require("./uacData");
const seedCaseManager = require("./userData");

// const userData = require("./userData.json");

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   process.exit(0);
// };

// seedDatabase();
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const sponsors = await Sponsor.bulkCreate(sponsorData);
  process.exit(0);
};
seedDatabase();
// seedSponsors();
// seedUACs();
// seedCaseManager();
