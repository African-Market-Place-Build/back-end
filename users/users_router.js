const express = require('express');
const Users = require("./users-model.js");
const Items = require("../items/items-model");
const router = express.Router();

router.get("/", (req, res) => {
  Users.find()
  .then(users => {
    if(users.length < 1){
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

router.get('/allitems', (req, res) => {
  Items.getAllItems()
    .then(items => {
      if(items < 1){
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

router.get("/:userId/items", (req, res) => {
  Items.getUserItems(req.params.userId)
      .then(items => {
          if(items.length < 1){
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

router.get('/:userId/items/:itemId', (req, res) => {
  Items.getById(req.params.userId, req.params.itemId)
      .then(item => {
        if(!item){
          res.status(404).json({message: "The item with the specified ID does not exist!"});
        } else {
          res.status(200).json(item);
        };
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({message: error.message});
      });
});

router.post("/:userId/items", (req, res) => {
  if (req.body.name && req.body.category && req.body.location && req.body.description && req.body.contactInfo && req.body.price){
    Items.insert(req.params.userId, req.body)
    .then(item => {
      res.status(201).json(item);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({message: error.message});
  });
  } else {
    res.status(400).json({message: "Missing one or more required fields!"})
  };
});

router.delete('/:userId/items/:itemId', async (req, res) => {

  const found = await Items.getById(req.params.userId, req.params.itemId);

  if(found){
    Items.remove(req.params.userId, req.params.itemId)
    .then( count => {
      res.status(200).json({message: "The item has been removed!"});
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({message: error.message});
    });
  } else {
    res.status(404).json({message: "The item with the specified ID does not exist!"});
  };
});

router.put('/:userId/items/:itemId', async (req, res) => {

  const found = await Items.getById(req.params.userId, req.params.itemId);

  if(found){
    if (req.body.name && req.body.category && req.body.location && req.body.description && req.body.contactInfo && req.body.price){
      Items.update(req.params.userId, req.params.itemId, req.body)
        .then(item => {
          res.status(200).json(item);
        })
        .catch(error => {
          console.log(error);
          res.status(500).json({message: error.message});
        });
      } else {
        res.status(400).json({message: "Missing one or more required fields!"});
      };
  } else {
    res.status(404).json({message: "The item with the specified ID does not exist!"});
  };
});



module.exports = router;