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
    updateOne: function(table, colToChange, newVal, condCol, conVal, cb) {
        const query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(query, [table, colToChange, newVal, condCol, conVal], function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
};

module.exports = orm;