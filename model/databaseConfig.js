//memebuat 
var mysql = require('mysql');
var dbconnect =mysql.createPool({
    host:"localhost",
    user:"root",
    password: "",
    database: "furniture"
});

module.exports = dbconnect