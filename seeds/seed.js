const sequelize = require("../config/connection");
const { authCM } = require("../models");
const authData = require("./authData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const casemanagers = await authCM.bulkCreate(authData, {
    individualHooks: true,
    returning: true,
  });

  for (const { id } of casemanagers) {
    const newCM = await authCM.create({
      auth_id: id,
    });
  }

  process.exit(0);
};
seedDatabase();
// seedSponsors();
// seedUACs();
// seedCaseManager();
