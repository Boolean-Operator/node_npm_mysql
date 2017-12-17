var express     = require('express');
var mysql       = require("mysql");
var bodyParser  = require("body-parser");
var app         = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'marktgraybill',
  database : 'join_us'
});
 

// Render home page with current count of users
app.get("/", function (req, res){
    var q = 'SELECT COUNT(*) AS total FROM users';
    connection.query(q, function (err, results) {
        if(err) throw err;
        var countNum = results[0].total;
        res.render("home", {data: countNum});
        console.log("home page request sent"); 
     });
});

// Add email to database and redirect back to home page
app.post("/register", function (req, res){
    var person = {
            email: req.body.email
        };
    connection.query('INSERT INTO users SET ?', person, function(err, result) {
      if (err) throw err;
      console.log(result);
      res.redirect("/");
    });

});


app.listen(8080, function(){
    console.log("Server running on 8080");
});