const db = require("../database/dbConfig.js");

module.exports = {
    find,
    add,
    findBy,
    findById
};

function find(){
    return db("users");
};

function findBy(username) {
    return db("users").where(username).orderBy("id");
};

function findById(id) {
    return db("users").where({id}).first();
};

function add(user) {
    return db("users").insert(user).then(ids => ids);
};

