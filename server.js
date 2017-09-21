var express = require('express');
var morgan = require('morgan');
var path = require('path');
const {Pool, Client} = require('pg');

const pool = new Pool({
    user: 'debarghyas',
    host: 'db.imad.hasura-app.io',
    database: 'debarghyas',
    password: process.env.DB_PASSWORD,
    port: 5432
});
var app = express();
app.use(morgan('combined'));

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

app.get('/testdb', function(req, res){
    pool.query('SELECT * FROM List');
    console.log (err.res);
    pool.end();
});
 
console.log ('IMAD course app listening on port ${port}!');
});