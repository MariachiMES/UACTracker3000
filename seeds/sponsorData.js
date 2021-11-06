const { Sponsor } = require("../models");

const sponsorData = [
  {
    uac: "Steph Curry",
    sponsor_name: "Lebron James",
    sponsor_address: {
      address1: "1600 Pennylvania Ave",
      address2: null,
      city: "Washington",
      state: "DC",
      zip: 78839,
    },
    relationship: "Maternal grandmother",
    gender: "male",
    ID: {
      id_type: "Gautemalan Consular ID",
      expiration_date: 12 / 12 / 2024,
    },
    previous_sponsorship: 10 / 31 / 2021,
    previous_sponsorship_narrative:
      "On 10/31/1998, sponsor attempted to sponsor Richard Townsend A#123535439.  The UAC is no longer living with the sponsor.",
    previous_address: 10 / 31 / 2021,
    primary_caregiver: "Barack Obama, 2nd cousin three times removed",
  },
];

const seedSponsors = () => Sponsor.bulkCreate(sponsorData);

module.exports = seedSponsors;
