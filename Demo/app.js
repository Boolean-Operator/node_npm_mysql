console.log("Connect to mySql and join_us DB");
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'marktgraybill',
  database : 'join_us'
});
 
 

var data = [
  ['blah@gmail.com', '2017-05-01 03:51:37'],
  ['ugh@gmail.com', '2017-05-02 03:52:37'],
  ['meh@gmail.com', '2017-05-03 03:53:37'],
  ['Gru@gmail.com', '2017-05-04 03:54:37']
]; 
 
var q = 'INSERT INTO users (email, created_at) VALUES ?';
 
connection.query(q, [data], function(err, result) {
  console.log(err);
  console.log(result);
});
 
var rq = 'SELECT COUNT(*) AS total FROM users';

connection.query(rq, function (error, results, fields) {
  if (error) throw error;
  console.log('Total users signed up: ', results[0].total);
});

// end connection, handle any errors
connection.end(function (err) {
    return err;
});



