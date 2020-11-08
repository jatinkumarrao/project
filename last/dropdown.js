const express = require('express');
const { promisify } = require('util');
var creds = require('./data-3c155f5283bc.json');
var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');
 const app = express();
cors = require('cors');
app.use(cors()); 
// spreadsheet key is the long id in the sheets URL
var doc = new GoogleSpreadsheet('1UVjq5xho-zuOPUFiUhhKDZxl85KzYgCQ1OXh2dzzfgw');
var sheet;
 
async.series([
  function setAuth(step) {
    // see notes below for authentication instructions!
    var creds = require('./data-3c155f5283bc.json');
    // OR, if you cannot save the file locally (like on heroku)
    var creds_json = {
      client_email: 'sheet-168@data-253108.iam.gserviceaccount.com',
      private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCfkHdxEqEm4Djk\n4Jb6Tpx54XVJBNb0vGnHsVW3UembE+pvmz2A+znfpXwwbPClKJmE3IVZr26oqmXv\netp8uxr9UBZwbe7PkTJwb+oJiHNA9dv1JbLZ/2G7hDH7JFRrnRMVzJP6sTj5nEIa\nFPkPpDyEAulPb5VfHt3XfVQEvUCvfhWtMJvt4pCjwF4AYTdxg5TyVmSY915/3WpY\nf7c+HWH94NVrq7VK4k1ZJEZGSfwJLPnudUtwQrumq+A6c/LsG0B1tUQjnRwdS8DU\nn3mWhj1NQrjeMaqp6XR9CHwuyzdwNT8X6Zct/qrFFTmwBOhv6sRVf2g0uNrZHuVq\nj94nEiktAgMBAAECggEATG2nOGri87sMpVyKFITY4GxEgGAoEfu5cyQW2YMLsPMe\nJK0oDYLIGr6qOIvFzGYg+omh+e5Uw8cyoj2nL31zlQfqZ5nQfG2gykhgwoYwJlpd\nLBQNkeuIRYgxZIjnQtBu1s8xxi9jCfR1mQaYsYxKTDUUya65zmD7g38NYmO/+w5Y\n5RLlOi4h0A2jSovRLR80aLlU3bNggm7tp5eDljeHz2wl83uQXMDpUaYgbRv4GxjR\nQ4p8Q6eKs3IQpQtKHFhxvsrXlLt/w7AVvl25qARJmFG4WAXIIdW2QfT0O2r/CBUc\nJb9ZdYV4BAEwRhMkPqC6XekMCGQb7BV7eYt9kF7NJQKBgQDPu+4s5WwvXQYkrU+K\nLef4RkuBml81UoMJjXKBDyXOeHlrIp8GZteemsM8dG4F7XokMWLn2PPfiKf1jVYH\nM48jTB2U8jzWU3zb/0jSWAOblldK8ePFjr0sQ4v9GXq/2MTJD1+OEOjuUsa3FiTI\n726zzpjJiWc2IBZB1gicq9wVfwKBgQDEo2MeCPLkyRvx5lOhVWISnPlMnL8LC5Qq\nR5BaoZqVDf7teyrPTAbIqAWiXGWHnOCsILbS8Okth98rKqzIShz5W/RKsyQZdpf9\nUdtBuN8VDoldpbpmDzG6ovjesRwGiQtRf8v+QpVHdMzuCzJhyg2Nrf5YADSNINJc\njmmHeGtPUwKBgDOjUKJiaVEgu500Y7hCjw49UxmlaRNVLnOacKM6Q7ieY/hIw+UQ\nfXrUl8GYY50fmiQTDrX5TS38x1uXxZHGtEce7Z+P06WnXTtGqzB2ZncvmQVtOaRr\nRgURyWOiCMxVsx0TsDodY/mSJAlw/LXiJs+VhI9ck4Z11XKKJNvlMLE7AoGBAKin\nQlH2du3Hl9JILJ6Jbw5r2F7fafP9QF1q9+LkDIOfd3EUXMljecYMZpi1Ctffs8uu\nW2BdBIHqsXyCo6M9/c/aEJMpRuMYFpBM7vNVrvCOgT7y8AatLYfYVAAcg98PF8gV\nBk/Tp9mb0lCxBctd03YbL7Ump+wLpKGB+/0XSWLFAoGAPARqYCsN02Fn2k+62BK1\nuoKbgwDkv5ucEAIBaamlutcFw7AoyORuNniL4hzGYSTzfwIh1jtf+O3oYctDUW00\nHey9ZDtgGCLNuq3eAVY6jI4U99CmSoZkSq8V9J9uuijKP+wTFxE7kbgPxOVYYG1z\n75pyu96hTWJBbjJ301Mfhhw=\n-----END PRIVATE KEY-----\n',
    }
 
    doc.useServiceAccountAuth(creds, step);
  },
  
  function getInfoAndWorksheets(step) {
  	app.get('/', function (req, res) {
    doc.getInfo(function(err, info) {
    
      console.log('Loaded doc: '+info.title+' by '+info.author.email);
    
      sheet = info.worksheets[0];
       res.json(info)
      // console.log(sheet.title)
      //console.log('sheet name: '+sheet.title+' '+sheet.rowCount+'x'+sheet.colCount);
    step();
   
    }); 

  })
    
  }
  ])
app.get('/get', function (req, res) {
const creds =require ('./data-3c155f5283bc.json');

   console.log('Questions: ${student.name}');
   //console.log('sub 1 tab: ${student.sub 1 tab}');
 
async function accessSpreadsheet(){
  const doc = new GoogleSpreadsheet('1JYXOnBmNObbmcrMAtQO_hiG5g5N9hhJjphhg2fyZCGw');
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  const sheet = info.worksheets[0];

  console.log('Title: ${sheet.title}, Rows: ${sheet.rowCount}')
    const rows =await promisify(sheet.getRows)({
      query: 'class= MA'
});
    rows.forEach(row=>{
   
    res.json(row)
    })
  }
accessSpreadsheet();
})
app.get('/get1', function (req, res) {
const creds =require ('./data-3c155f5283bc.json');

   function printStudent(student){
   console.log('Questions: ${student.name}');
   //console.log('sub 1 tab: ${student.sub 1 tab}');
}
async function accessSpreadsheet(){
 
  const doc = new GoogleSpreadsheet('1JYXOnBmNObbmcrMAtQO_hiG5g5N9hhJjphhg2fyZCGw');
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  const sheet = info.worksheets[0];
 // console.log('Title: ${sheet.title}, Rows: ${sheet.rowCount}')
    const rows =await promisify(sheet.getRows)({
      query: 'run= yes'
});
    rows.forEach(row=>{
      printStudent(rows)
//res.json(row);
 
  
    })
}accessSpreadsheet();
})

/**app.get('/get', function (req, res) {
    var creds = require('./data-3c155f5283bc.json');
  function printStudent(student){
  console.log('Questions: ${student.Activities & Employment}');}

  async function accessSpreadsheet(){
    var doc = new GoogleSpreadsheet('1UVjq5xho-zuOPUFiUhhKDZxl85KzYgCQ1OXh2dzzfgw');
   await promisify(doc.useServiceAccountAuth)(creds);
 const info = await promisify(doc.getInfo)();
  const sheet = info.worksheets[0];
  const rows =await promisify(sheet.getRows)({

    query: 'sub 1 tab = Q1'
})
  rows.forEach(row =>{
    printStudent(row);
    console.log(row)
  } )
}
accessSpreadsheet();
})
}

  ])**/
app.get('/get2', function (req, res) {
function listMajors() {
  const sheets = google.sheets({version: 'v4'});
  sheets.spreadsheets.values.get({
    spreadsheetId: '1JYXOnBmNObbmcrMAtQO_hiG5g5N9hhJjphhg2fyZCGw',
    range: 'Data!A2:E',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
      console.log('name');
      // Print columns A and E, which correspond to indices 0 and 4.
      rows.map((row) => {
        console.log(`${row[0]}, ${row[4]}`);
      });
    } else {
      console.log('No data found.');
    }
  });
}
});
var doc = new GoogleSpreadsheet('1JYXOnBmNObbmcrMAtQO_hiG5g5N9hhJjphhg2fyZCGw');



 

// Authenticate with the Google Spreadsheets API.

doc.useServiceAccountAuth(creds, function (err) {

 
app.get('/get7', function (req, res) {
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
});
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})