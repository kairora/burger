const orm = require("../config/orm.js")

let burger= {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(bVal, cb) {
        orm.insertOne("burgers", "burger_name", bVal, function(res) {
            cb(res);
        });
    },
    updateOne: function(bID, cb) {
        orm.selectAll("burgers", "devoured", 1, bID, function(res) {
            cb(res);
        });
    },
    
}

module.exports = burger;