// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Create an instance of express
const app = express();

// Your Express app setup and routes here

//We use the 'body-parser' middleware to parse the incoming request bodies
app.use(bodyParser.urlencoded({extended: false}));

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log('views', path.join(__dirname, 'views'));

// The GET route for the form
app.get('/', (req, res) => {
    // Render the form and pass in the current student data
    res.render('index');
});

// The POST route for form submissions
app.post("/calculate", (req, res) => {
    const { num1, num2 } = req.body;
    const sum = Number(num1) + Number(num2);
    const difference = Number(num1) - Number(num2);
    const product = Number(num1) * Number(num2);
    const quotient = Number(num1)/ Number(num2);
    res.render("result", {sum, difference, product, quotient});
});

//Start server on port 4000
// Note we are advertising the service on port number 4000 and not 3000 this time
var port = 4000
//NOTE
// the quotes are replaced by back ` next to key caps 1
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
