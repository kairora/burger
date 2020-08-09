const connection = require("../config/connection.js")

const orm = {
    selectAll: function(table, cb) {
      const query = "SELECT * FROM ??";
      connection.query(query, [table], function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(table, col, val, cb) {
        const query = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(query, [table, col, val], function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },
    updateOne: function(table, devoured, cond, cb) {
        const query = `UPDATE ${table} SET devoured = ${devoured} WHERE ${cond}`;
        console.log(query)
        connection.query(query, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
};

module.exports = orm;