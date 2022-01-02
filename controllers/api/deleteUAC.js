const router = require("express").Router();
const { UAC } = require("../../models");
router.delete("/:uac_id", (req, res) => {
  //Calls the update method on the Book model
  console.log("delteUAC.js", req.body);
  UAC.destroy(
    {
      // All the fields you can update and the data attached to the request body.
      uac_id: req.body.uac_id,
    },
    {
      // Gets a book based on the book_id given in the request parameters
      where: {
        uac_id: req.body.uac_id,
      },
    }
  )
    .then((deletedUAC) => {
      res.json(deletedUAC);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
