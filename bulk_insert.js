var mysql = require('mysql');
var faker = require('faker');

 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'marktgraybill',
  database : 'join_us'
});
 
 
var data = [];
for(var i = 0; i < 500; i++){
    data.push([
        faker.internet.email(),
        faker.date.past(10)
    ]);
}
 
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



