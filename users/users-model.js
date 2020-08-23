const db = require("../database/dbConfig.js");
const mappers = require('../database/helpers/mappers');

module.exports = {
    add,
    findBy,
    getUserItems
};

function findBy(filter) {
    return db("users").where(filter).orderBy("id");
};

function findById(id) {
    return db("users").where({ id }).first();
};

async function add(user) {
    try {
        const [id] = await db("users").insert(user, "id");

        return findById(id);
    } catch (error) {
        throw error;
    };
};

function getUserItems(userId){
    return db("items")
      .where("user_id", userId)
      .then(actions => actions.map(action => mappers.actionToBody(action)));
};