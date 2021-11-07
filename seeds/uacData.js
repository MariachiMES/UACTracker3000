const { UAC } = require("../models");

const UACData = [
  {
    name: "Steph Curry",
    sponsor_name: "Lebron James",
    a_number: 123345234,
    dob: 2 / 26 / 2005,
    age: 13,
    coo: "Guatemala",
    intake: 10 / 28 / 2021,
    gender: "Male",
    category: "2A",
    case_manager: "David Ortiz",
    FRP: 10 / 29 / 2021,
    ARI: 10 / 29 / 2021,
    POR: 10 / 29 / 2021,
    list_of_bcs: "UAC Biological Mother, UAC",
    sponsor_bgc: 10 / 30 / 2021,
    sponsor_id: 10 / 30 / 2021,
    sponsor_fp: 10 / 30 / 2021,
    hhm_id: null,
    hhm_checks: null,
    SIR: 2,
    sex_offender_check: 10 / 31 / 2021,
  },
];

const seedUACs = () => UAC.bulkCreate(UACData);

module.exports = seedUACs;
