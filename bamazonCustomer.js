////////////////////
// CREATE THE REQUIREMENTS FOR THE JS FILE TO WORK WITH NODE
///////////////////
var mysql = require ("mysql");
var inquirer = require ("inquirer");
var colors = require ("colors");
var Table = require ("cli-table");

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
//// ONCE CONNECTED, WE SHOULD BE GREETED WITH THE FOLLOWING OR THROWN AN ERROR MESSAGE////
connection.connect(function(err){
    if (err) throw err;
    console.log("--------------------".rainbow.bold);
    console.log("Connected to Bamazon as id:".bgMagenta.bold + connection.threadId);
    console.log("--------------------".rainbow.bold);
})

///////////////
// NEED A FUNCTION TO DISPLAY OUR DATABASE TABLE
// USING A MODULE CALLED CLI-TABLE FROM THE NPM SITE.
// WE NEED TO SELECT OUR TABLE FROM OUR DATABAS BY USING QUERY
//////////////
function displayTable() {
    var query = "SELECT * FROM products";
    connection.query(query, function(err, res){
        if (err) throw err;

    var table = new Table ({
        head: ["ID #", "Product", "Department", "Price", "Quantity"]
        ,colWidths: [6, 35, 15, 10, 10]
    });
    for (var i = 0; i < res.length; i++) {
        table.push([
            res[i].item_id,
            res[i].product_name,
            res[i].department_name,
            res[i].price,
            res[i].stock_quantity
        ]);
    }
    console.log(table.toString());
    });
}
displayTable();