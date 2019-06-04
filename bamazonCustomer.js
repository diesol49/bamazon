////////////////////
// CREATE THE REQUIREMENTS FOR THE JS FILE TO WORK WITH NODE
///////////////////
var mysql = require ("mysql");
var inquirer = require ("inquirer");

//////////////////
// CREATE OUR CONNECTION TO OUR DATABASE
/////////////////
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Diesol",
    database: "bamazon_db"
})
//// ONCE WE'RE CONNECTED, IT SHOULD CONSOLE.LOG THE FOLLOWING////
connection.connect(function(err){
    console.log("Connected to Bamazon as id:" + connection.threadId);
})