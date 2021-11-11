const router = require("express").Router();
const { UAC } = require("../../models");

router.put("/uac/:uac_id", (req, res) => {
  //Calls the update method on the Book model
  console.log("This works");
  UAC.update(
    {
      // All the fields you can update and the data attached to the request body.
      uacname: req.body.uacname,
      a_number: req.body.a_number,
      dob: req.body.dob,
      coo: req.body.coo,
      age: req.body.age,
      category: req.body.category,
      gender: req.body.gender,
    },
    {
      // Gets a book based on the book_id given in the request parameters
      where: {
        uac_id: req.params.uac_id,
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
