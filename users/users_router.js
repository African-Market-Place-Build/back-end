const express = require('express');
const Users = require("./users-model.js");
const router = express.Router();

router.get("/", (req, res) => {
  Users.find()
  .then(users => {
    if(!users){
        res.status(404).json({message: "No users found!"})
      } else {
        res.status(200).json(users);
      };
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({message: err.message});
  });
});

router.get("/:id/items", (req, res) => {
    Users.getUserItems(req.params.id)
        .then(items => {
            if(!items){
                res.status(404).json({message: "No items found!"})
              } else {
                res.status(200).json(items);
              };
            })
            .catch(err => {
              console.log(err);
              res.status(500).json({message: err.message});
        });
});

module.exports = router;