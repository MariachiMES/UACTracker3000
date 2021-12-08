const router = require("express").Router();
const { UAC } = require("../../models");

router.put("/status/:status_id", (req, res) => {
  //Calls the update method on the Book model
  console.log("editStatusRoutes.js", req.body);
  UAC.update(
    {
      // All the fields you can update and the data attached to the request body.
      submitted: req.body.submitted,
      approved: req.body.approved,
      remanded: req.body.remanded,
    },
    {
      // Gets a book based on the book_id given in the request parameters
      where: {
        uac_id: req.params.status_id,
      },
    }
  )
    .then((updatedUAC) => {
      res.json(updatedUAC);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
