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

// con.connect(function(err) {
//     var sql = "INSERT INTO Users (username, displayName, password_, email)\
//      VALUES ('myUser', 'myDisplayName', 'myPassword', 'myEmail')";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
// });

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Users", function (err, result, fields) {
    if (err) throw err;
    console.log(result);

    con.end(); 
  });
});
