var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "Bamazon"
});

connection.connect(function(err) {
  if (err) throw err;

  console.log("Connected to database.");

  displayInventory();

// displayInventory will retrieve the current inventory from the database and output it to the console
function displayInventory() {
  // console.log('___ENTER displayInventory___');

  // Construct the db query string
  queryStr = 'SELECT * FROM products';

  // Make the db query
  connection.query(queryStr, function(err, data) {
    if (err) throw err;

    console.log('Existing Inventory: ');
    console.log('...................\n');

    var strOut = '';
    for (var i = 0; i < data.length; i++) {
      strOut = '';
      strOut += 'Item ID: ' + data[i].item_id + '  //  ';
      strOut += 'Product Name: ' + data[i].product_name + '  //  ';
      strOut += 'Department: ' + data[i].department_name + '  //  ';
      strOut += 'Price: $' + data[i].price + '\n';

      console.log(strOut);
    }

      console.log("---------------------------------------------------------------------\n");

});

}

});

     inquirer.prompt({
            name: "itemId",
            type: "input",
            message: "Enter the ID for the item you would like to purchase", //prompt user to id to buy
            });
     