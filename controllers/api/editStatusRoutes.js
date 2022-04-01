const router = require("express").Router();
const { UAC } = require("../../models");

router.put("/status/:status_id", (req, res) => {
  console.log("editStatusRoutes.js", req.body, req.params);
  UAC.update(
    {
      submitted: req.body.submitted,
      approved: req.body.approved,
      remanded: req.body.remanded,
      discharged: req.body.discharged,
    },
    {
      where: {
        uac_id: req.params.status_id,
      },
    }
  )
    .then((updatedUAC) => {
      res.json(updatedUAC);
      console.log("updating " + updatedUAC);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
