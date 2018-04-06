//express
var express = require('express');
var app = express();
//parser
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
//path
var path = require('path');
//cors
var cors = require("cors")
var cor = cors();
app.use(cor);
//define path
app.use(express.static(path.join(__dirname, "../public")));
//define model
var furniture = require('../model/furniture.js');
//define routing or link api
app.get('/api/category/:catid/furniture', function (req, res) {
 var catid = req.params.catid;
 furniture.getFurnitureByCat(catid, function (err, result) {
 if (!err) {
 res.send(result);
 }
 else {
 console.log(err);
 res.status(500).send(err);
 }
 });
});
module.exports = app