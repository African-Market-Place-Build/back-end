const express = require('express');
const Items = require("./items-model.js");
const router = express.Router();

router.get('/', (req, res) => {
  Items.get()
    .then(items => {
      res.status(200).json(items);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({message: "Error retrieving items"});
    });
});

router.get('/:id', (req, res) => {
  Items.get(req.params.id)
      .then(item => {
          res.status(200).json(item);
      })
      .catch(error => {
          console.log(error);
          res.status(500).json({message: "Error retrieving the item"});
      });
});

router.post("/", (req, res) => {
  Items.insert(req.body)
        .then(item => {
          res.status(201).json(item);
        })
        .catch(error => {
          console.log(error);
          res.status(500).json({message: "Error adding the item"});
      });
});

router.delete('/:id', (req, res) => {
  Items.remove(req.params.id)
    .then(count => {
      res.status(200).json({message: "The item has been deleted"});
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({message: "Error removing the item"});
    });
});

router.put('/:id', (req, res) => {
  Items.update(req.params.id, req.body)
    .then(item => {
      res.status(200).json(item);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({message: "Error updating the item"});
    });
});

module.exports = router;
