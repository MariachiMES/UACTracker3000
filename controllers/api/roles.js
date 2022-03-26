const router = require("express").Router();
const { CaseManager } = require("../../models");

router.put("/roles/:role_id", (req, res) => {
  console.log("roles.js", req.body);
  CaseManager.update(
    {
      is_team_lead: req.body.is_team_lead,
    },
    {
      where: {
        user_id: req.params.role_id,
      },
    }
  )
    .then((updatedCasemanager) => {
      res.json(updatedCasemanager);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
