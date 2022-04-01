const router = require("express").Router();
const { CaseManager } = require("../../models");

router.put("/teamlead/:team_lead_id", (req, res) => {
  console.log(
    "teamlead.js",
    req.body,
    req.body.casemanager_user_id,
    req.params,
    req.params.team_lead_id
  );
  CaseManager.update(
    {
      casemanager_user_id: req.body.casemanager_user_id,
    },
    {
      where: {
        user_id: req.params.team_lead_id,
      },
    }
  )
    .then((updatedCasemanager) => {
      res.json(updatedCasemanager);
      console.log("this is " + updatedCasemanager);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
