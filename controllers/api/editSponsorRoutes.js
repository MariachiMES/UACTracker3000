const router = require("express").Router();
const { UAC } = require("../../models");
router.put("/sponsor/:sponsor_id", (req, res) => {
  //Calls the update method on the Book model
  console.log("UPDATE SPONSOR", req.body);
  UAC.update(
    {
      // All the fields you can update and the data attached to the request body.
      sponsor_name: req.body.sponsor_name,
      sponsor_address_1: req.body.sponsor_address_1,
      sponsor_address_2: req.body.sponsor_address_2,
      sponsor_city: req.body.sponsor_city,
      sponsor_state: req.body.sponsor_state,
      sponsor_zip: req.body.sponsor_zip,
      sponsor_relationship: req.body.sponsor_relationship,
      sponsor_age: req.body.sponsor_age,
      sponsor_gender: req.body.sponsor_gender,
    },
    {
      // Gets a book based on the book_id given in the request parameters
      where: {
        uac_id: req.params.sponsor_id,
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
