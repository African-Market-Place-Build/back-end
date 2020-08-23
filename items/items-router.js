const express = require('express');
const Items = require("./items-model.js");
const router = express.Router();

router.get('/', (req, res) => {
  Items.get()
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

router.get('/:id', (req, res) => {
  Items.get(req.params.id)
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

router.post("/", (req, res) => {
  if (req.body.user_id && req.body.name && req.body.location && req.body.description && req.body.contactInfo && req.body.price){
    Items.insert(req.body)
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

router.delete('/:id', async (req, res) => {

  const found = await Items.get(req.params.id);

  if(found){
    Items.remove(req.params.id)
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

router.put('/:id', async (req, res) => {

  const found = await Items.get(req.params.id);

  if(found){
    if (req.body.user_id && req.body.name && req.body.location && req.body.description && req.body.contactInfo && req.body.price){
      Items.update(req.params.id, req.body)
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
