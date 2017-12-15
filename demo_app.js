console.log("JoinUs.app.js");

var mysql = require('mysql');
var faker = require('faker');

var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'marktgraybill',
    database: 'join_us'
});


//  SELECTING DATA
var q = 'SELECT CURTIME() as time, CURDATE() as date, NOW() as now';

connection.query(q, function (error, results, fields) {
  if (error) throw error;
//   console.log(results);
  console.log('The current time is : ', results[0].time);
  console.log('The current date is : ', results[0].date);
  console.log('The current now is : ', results[0].now);
});


var q = 'SELECT * FROM users';

connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results[1].email);
});


var q = 'SELECT COUNT(*) AS total FROM users';

connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log('Total users signed up: ', results[0].total);
});

//  INSERTING DATA TAKE 1
var q = 'INSERT INTO users (email) VALUES ("snow_the_kitty@mouser.com")';

connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results);

});


// INSERTING DATA TAKE 2
var person = {email: 'jenny467@gmail.com'};

connection.query('INSERT INTO users SET ?', person, function(err, result) {
  if (err) throw err;
  console.log(result);
});

// INSERTING DATA TAKE 3
var person = {
  email: faker.internet.email(),
  created_at: faker.date.past()
  };

connection.query('INSERT INTO users SET ?', person, function(err, result) {
  if (err) throw err;
  console.log(result);
});

// INSERTING DATA TAKE 4

var person = {
  email: faker.internet.email(),
  created_at: faker.date.past()
  };

connection.query('INSERT INTO users SET ?', person, function(err, result) {
  if (err) throw err;
  console.log(result);
});

// INSERTING BULK DATA  (MANY ROWS AT ONCE)==============

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


// SELECTING DATA to get COUNT of total users signed up
var rq = 'SELECT COUNT(*) AS total FROM users';

connection.query(rq, function (error, results, fields) {
  if (error) throw error;
  console.log('Total users signed up: ', results[0].total);
});

// end connection, handle any errors
connection.end(function (err) {
    return err;
});
