//memebuat 
var mysql = require('mysql');
var dbconnect =mysql.createPool({
    host:"localhost",
    user:"root",
    password: "furniture"
});

module.exports = dbconnect