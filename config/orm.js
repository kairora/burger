const connection = require("../config/connection.js")

var orm = {
    selectAall: function(table, cb) {
      var query = "SELECT * FROM ??";
      connection.query(query, [table], function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    

};

module.exports = orm;