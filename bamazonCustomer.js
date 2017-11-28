//packages
var inquirer = require('inquirer');
var mysql = require('mysql');
// require('console.table');

//database connection
var connection = mysql.createConnection({
  host: 'localhost',
  port: 8889,
  user: 'root',
  password: 'root',
  database: 'bamazon'
});

connection.connect(function(err){
  if (err) throw err;

  console.log("Connected to database.");
  //call placeOrder function here
  placeOrder();
});

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


//start variables

var sellItem = "";
var sellQty = 0;
var totalPurchase = 0;
var itemDept = "";

var placeOrder =  function () {
inquirer.prompt ([{
    name: "itemId",
    type: "input",
    message: "What is the item id?"
},

{   name: "quantity",
    type: "input",
    message: "How many would you like?"
  }

]).then(function(answer){
// console.log(answer.itemId + answer.quantity);

queryStr = 'SELECT * FROM products where item_id =' + answer.itemId;


// Make the db query
connection.query(queryStr, function(err, data) {
  if (err) throw err;



//Check Inventory
if (answer.quantity > data[0].stock_quantity) {
  console.log("Insufficient quanitity")
} else {
  var total = data[0].price * parseInt(answer.quantity);
  console.log ("Your total is $" + total);
  updateStock (answer.itemId, answer.quantity, data[0].stock_quantity);
}

})
} )

}

function updateStock (id, stockQuantity, dbQuantity) {
// console.log(id + stockQuantity);
var queryStr= "UPDATE products SET stock_quantity = '" + (dbQuantity - stockQuantity) + "' WHERE item_id = " + id + " ;"

connection.query(queryStr, function(err, data) {
  if (err) throw err;
  console.log ("Updated database");
})
}
