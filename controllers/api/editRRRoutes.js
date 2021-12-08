const router = require("express").Router();
const { UAC } = require("../../models");
router.put("/RR/:RR_id", (req, res) => {
  //Calls the update method on the Book model
  console.log("UPDATE ReleaseRequest", req.body);
  UAC.update(
    {
      // All the fields you can update and the data attached to the request body.
      list_of_bcs: req.body.list_of_bcs,
      coo_narrative: req.body.coo_narrative,
      self_disclosure: req.body.self_disclosure,
      criminal_history: req.body.criminal_history,
      sponsor_id_type: req.body.sponsor_id_type,
      hhm_id_list: req.body.hhm_id_list,
      poa_document: req.body.poa_document,
      fp_required: req.body.fp_required,
      fp_results: req.body.fp_results,
      can_check_required: req.body.can_check_required,
      can_check_received: req.body.can_check_received,
      can_check_results: req.body.can_check_results,
      coo_caregiver: req.body.coo_caregiver,
      prior_sponsorship: req.body.prior_sponsorship,
      previous_address: req.body.previous_address,
      release_recommendation: req.body.release_recommendation,
      home_study_prs: req.body.home_study_prs,
    },
    {
      // Gets a book based on the book_id given in the request parameters
      where: {
        uac_id: req.params.RR_id,
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
