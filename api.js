var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send('hello world')
})

app.get('/1', function(req, res) {
  res.send('1')
})

app.listen(3000)