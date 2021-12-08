const router = require("express").Router();
const { UAC } = require("../../models");
router.put("/tasks/:task_id", (req, res) => {
  //Calls the update method on the Book model
  console.log("UPDATE UAC", req.body);
  UAC.update(
    {
      // All the fields you can update and the data attached to the request body.
      sponsor_assessment: req.body.sponsor_assessment,
      frp: req.body.frp,
      ari: req.body.ari,
      por: req.body.por,
      poa: req.body.poa,
      lod: req.body.lod,
      lopc: req.body.lopc,
      sponsor_bgc: req.body.sponsor_bgc,
      sponsor_id: req.body.sponsor_id,
      sponsor_fp: req.body.sponsor_fp,
      hhm_checks: req.body.hhm_checks,
      hhm_id: req.body.hhm_id,
      sex_offender_check: req.body.sex_offender_check,
      coo_caregiver_date: req.body.coo_caregiver_date,
      prior_sponsorship_date: req.body.prior_sponsorship_date,
      previous_address_date: req.body.previous_address_date,
      criminal_history_date: req.body.criminal_history_date,
      can_check_requested_date: req.body.can_check_requested_date,
    },
    {
      // Gets a book based on the book_id given in the request parameters
      where: {
        uac_id: req.params.task_id,
      },
    }
  )
    .then((updatedUAC) => {
      res.json(updatedUAC);
      console.log(updatedUAC);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
