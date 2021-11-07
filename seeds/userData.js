const { Casemanager } = require("../models");

const caseManagerData = [
  {
    name: "David Ortiz",
    username: "email",
    password: "password",
    user_id: 1,
  },
];

const seedCaseManager = () => Casemanager.bulkCreate(caseManagerData);

module.exports = seedCaseManager;
// const { Sponsor } = require("../models");

// const sponsorData = [
// ];

// const seedSponsors = () => Sponsor.bulkCreate(sponsorData);

// module.exports = seedSponsors;
