var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
var pg = require('pg');
var connection = "postgresql://debarghyas:db-debarghyas-30817@db.imad.hasura-app.io:5432/debarghyas";
app.use(morgan('combined'));
const pool = new Pool({
    connection: connection
});
pg.connect();


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
    pool.end();
});
console.log ('IMAD course app listening on port ${port}!');
