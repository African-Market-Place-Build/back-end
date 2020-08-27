const db = require('../database/dbConfig.js');

module.exports = {
  getAllItems,
  getById,
  getUserItems,
  insert,
  update,
  remove
};

function getAllItems() {
  return db("items");
};

function getById(userId, itemId) {
  return db("items").where({id: itemId, user_id: userId}).first();
};

function getUserItems(userId){
  return db("items").where("user_id", userId).orderBy("id");
};

function insert(userId, item) {
  return db('items').insert({...item, user_id: userId})
  .then(ids => ids);
};

function update(userId, itemId, changes) {
  return db('items')
    .where({id: itemId, user_id: userId})
    .update(changes)
    .then((count) => (count > 0 ? getById(userId, itemId) : null));
};

function remove(userId, itemId) {
  return db('items')
    .where({id: itemId, user_id: userId})
    .del();
};


