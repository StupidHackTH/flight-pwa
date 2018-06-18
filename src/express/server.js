var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()

var corsOptions = {
  origin: 'https://localhost:8080',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(bodyParser.json())

app.get('/products', cors(corsOptions), function (req, res, next) {
  res.json(req.body)
  console.log(JSON.parse(req.body))
  next();
})

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})