const express = require('express');
const app = express();
const cors = require('cors');
var GoogleSpreadsheet = require('google-spreadsheet');
var bodyParser = require('body-parser');
var creds = require('./data-3c155f5283bc.json');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
 app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Create a document object using the ID of the spreadsheet - obtained from its URL.

var doc = new GoogleSpreadsheet('1JYXOnBmNObbmcrMAtQO_hiG5g5N9hhJjphhg2fyZCGw');



 

// Authenticate with the Google Spreadsheets API.

doc.useServiceAccountAuth(creds, function (err) {

 
app.get('/', function (req, res) {
  // Get all of the rows from the spreadsheet
  doc.getRows(1, function (err, rows) {
 if (err) {
      return next(err)
    } else {
      res.json(rows)
       console.log(rows);
    }
 //   console.log(rows);
console.log(rows.length);
  });
});

})
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})