const CaseManager = require("./casemanager");
const UAC = require("./uac");
const authCM = require("./authCM");

CaseManager.hasMany(UAC, {
  foreignKey: "user_id",
});

UAC.belongsTo(CaseManager, {
  foreignKey: "user_id",
});

CaseManager.hasMany(CaseManager, {
  as: "team_member",
});

module.exports = { CaseManager, UAC, authCM };
