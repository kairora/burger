const orm = require("../config/orm.js")

let burger= {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(result) {
            cb(res);
        });
    },
    insertOne: function(cb) {

    },
    updateOne: function(cb) {

    },
    



}