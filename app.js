var express = require('express')
var app = express()

// Build Your Route Here
const path = require('index');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, resp){
  resp.render('firstEJSTemplate')
})

module.exports = app
