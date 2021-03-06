var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
var Pool = require('pg').Pool;

var config = {
    host: 'db.imad.hasura-app.io',
    user: 'debarghyas',
    password: process.env.DB_PASSWORD,
    database: 'debarghyas',
    }
app.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/list', function (req,res){
res.sendFile(path.join(__dirname, 'ui' , 'list.html'));

}); 

var pool = new Pool(config);
app.get('/testdb', function(req, res){
    pool.query('SELECT * FROM "List"', function (err, result){
        if (err){res.status(500).send(err.toString());}
        else { res.send(JSON.stringify(result)); }
    });
});


var port = 80;
app.listen(port, function(){
console.log('IMAD course app listening on port ${port}!');
});