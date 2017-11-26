var express = require('express')
var app = express()

// Build Your Route Here
const path = require('./views/index');
app.get('/', function(req, resp){
  const html = `
    <!doctype html>
    <html>
      <head>
        <title>Let's Use EJS</title>
      </head>
      <body>
        <h1>Learning To Use EJS</h1>
      </body>
    </html>
  `

  resp.send(html)
})

module.exports = app
