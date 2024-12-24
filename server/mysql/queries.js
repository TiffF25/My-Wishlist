var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "MyWishlistAdmin",
  password: "myW1shl1st!",
  database: "mysql"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

});

function createNewUser(username, displayName, password, email) {
  con.connect(function(err) {
      var sql = `INSERT INTO Users (username, displayName, password_, email)\
      VALUES (${con.escape(username)},${con.escape(displayName)},${con.escape(password,)},${con.escape(email)})`;
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
  });
}

function deleteUser(username) {
  con.connect(function(err) {
      var sql = `DELETE FROM Users WHERE username=${con.escape(username)}`;
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record removed");
      });
  });
}

function getAllUsers(callback) {
  con.connect(function (err) {
    if (err) throw err;
    const sql = "SELECT * FROM Users";
    con.query(sql, function (err, results) {
      if (err) throw err;

      // Convert the results to a JSON array
      const jsonArray = JSON.stringify(results);

      console.log("Users retrieved as JSON array:");
      console.log(jsonArray);

      if (callback) {
        callback(jsonArray); // Pass the JSON array to a callback function if provided
      }

      return jsonArray;
    });
  });
}

// createNewUser("myUser3", "myDisplayName3", "myPassword3", "myEmail3");
// deleteUser("username")
// getAllUsers();

con.connect(function(err) {
    con.end(); 
    console.log("Connection terminated.");
});
