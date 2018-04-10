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
//deklarasi model user
var user =require('../model/user');
/*define routing or link api
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
}),*/

//user
app.get('/api/user', function (req,res) {
 user.getUser(function (err,result) {
  if(!err){
   res.send(result);
  }
  else{
   console.log(err);
   res.status(500).send(err);
  }
 })
})

    //fucntion post aduser
    app.post('/api/user',urlencodedParser, jsonParser, function (req, res) {
     var useremail = req.body.useremail;
     var userpassword = req.body.userpassword;
     var name = req.body.name;
     // user
     user.addUser(useremail, userpassword, name, function (err,result) {
      if(!err){
       console.log(result);
       res.send(result.affectedRows + ' berhasil ditambahkan');
      }
      else{
       console.log(err);
       res.status(500).send(err.code);
      }
     })
    })

    //function delete
    app.delete('/api/user/:userid', function (req,res) {
     var userid = req.params.userid;

     user.deleteUser(userid, function (err, result) {
         if(!err){
             console.log(err);
             res.send(result.affectedRows + ' berhasil dihapus');
         }
         else{
             console.log(err);
             res.send(500).send(err.code);
         }
     });
    });
//end delete

//fucntion post aduser
app.post('/api/user/:userid',urlencodedParser, jsonParser, function (req, res) {
    var userpassword = req.body.userpassword;
    var name = req.body.name;
    var userid = req.params.userid;


    user.updateUser(userpassword, name, userid, function (err,result) {
        if(!err){
            console.log(result);
            res.send(result.affectedRows + ' record berhasil diubah');
        }
        else{
            console.log(err);
            res.status(500).send(err.code);
        }
    });
});

module.exports = app