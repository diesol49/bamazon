////////////////////
// CREATE THE REQUIREMENTS FOR THE JS FILE TO WORK WITH NODE
///////////////////
var mysql = require ("mysql");
var inquirer = require ("inquirer");
var colors = require ("colors"); // FOR ADDING COLORS TO OUR NODE
var Table = require ("cli-table"); // TABLE FORMAT FROM NPM SITE

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
    console.log("Connected to Bamazon as id:".green.bold + connection.threadId);
    console.log("--------------------".rainbow.bold);
    welcomeScreen();
})

function welcomeScreen() {
    console.log("==========".rainbow.bold + "WELCOME TO THE BAMAZON STORE".bgMagenta.white.bold + "==========".rainbow.bold);
    console.log("==========".america.bold + "ALL ITEMS SOLD IN THE USA BUT MADE IN ".bgCyan.white.bold + "CHINA".bgRed.yellow.bold + "==========".america);
}

///////////////
// NEED A FUNCTION TO DISPLAY OUR DATABASE TABLE
// USING A MODULE CALLED CLI-TABLE FROM THE NPM SITE.
// WE NEED TO SELECT OUR TABLE FROM OUR DATABASeS BY USING QUERY
//////////////
function displayTable() {
    var query = "SELECT * FROM products";
    connection.query(query, function(err, res){
        if (err) throw err;

    var table = new Table ({
        head: ["ID #".bgWhite.red,
        "Product".bgWhite.red,
        "Department".bgWhite.red,
        "Price".bgWhite.red,
        "Quantity".bgWhite.red]
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
//************** REMEMBER TO MOVE THIS CALL TO THE BOTTOM ONCE DONE WITH HW */
displayTable();

/////////////
// NOW WE NEED TO CREATE OUR FUNCTION PROMPT
// SO THAT THE USER COULD PURCHASE A PRODUCT
////////////
function buyPrompt() {
    inquirer.prompt([
        {
            name: "myItem",
            type: "input",
            message: "Input the ID# of the item you wish to purchase."
        },
        {
            name: "itemQTY",
            type: "input",
            message: "How many would you like?",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }
])
.then(function(answer) {
    connection.query(
        "SELECT item_id, product_name, price, stock_quatity FROM products WHERE ?"
    );
})
}