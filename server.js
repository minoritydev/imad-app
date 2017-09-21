var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();

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

var port = 80;
app.listen(port, function(){
console.log('IMAD course app listening on port ${port}!');
});