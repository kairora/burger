const orm = require("../config/orm.js")

let burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(col, bVal, cb) {
        orm.insertOne("burgers", col, bVal, function(res) {
            cb(res);
        });
    },
    updateOne: function(devoured, bID, cb) {
        orm.updateOne("burgers", devoured, bID, function(res) {
            cb(res);
        });
    },
}

module.exports = burger;