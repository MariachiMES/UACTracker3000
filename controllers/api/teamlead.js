const router = require("express").Router();
const { CaseManager } = require("../../models");

router.put("/teamlead/:team_lead_id", (req, res) => {
  console.log("teamlead.js", req.body);
  CaseManager.update(
    {
      team_lead: req.body.team_lead,
    },
    {
      where: {
        user_id: req.params.team_lead_id,
      },
    }
  )
    .then((updatedCasemanager) => {
      res.json(updatedCasemanager);
      console.log("successfullyupdated");
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
