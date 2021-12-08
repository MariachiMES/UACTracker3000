const CaseManager = require("./casemanager");
const UAC = require("./uac");

CaseManager.hasMany(UAC, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

UAC.belongsTo(CaseManager, {
  foreignKey: "user_id",
});

module.exports = { CaseManager, UAC };
