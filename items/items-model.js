const db = require('../database/dbConfig.js');
const mappers = require('../database/helpers/mappers');

module.exports = {
  get,
  insert,
  update,
  remove
};

function get(id) {
  let query = db('items');

  if (id) {
    return query
      .where('id', id)
      .first()
      .then((action) => {
        if (action) {
          return mappers.actionToBody(action);
        } else {
          return null;
        };
      });
  } else {
    return query.then((actions) => {
      return actions.map((action) => mappers.actionToBody(action));
    });
  };
};

function insert(item) {
  return db('items')
    .insert(item, 'id')
    .then(([id]) => get(id));
};

function update(id, changes) {
  return db('items')
    .where('id', id)
    .update(changes)
    .then((count) => (count > 0 ? get(id) : null));
};

function remove(id) {
  return db('items')
    .where('id', id)
    .del();
};


