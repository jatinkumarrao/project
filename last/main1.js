const express = require('express');
const app = express();
const cors = require('cors');
const { promisify } = require('util');
var GoogleSpreadsheet = require('google-spreadsheet');
var bodyParser = require('body-parser');
var creds = require('./data-3c155f5283bc.json');
var async = require('async');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
 app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
 
 var doc = new GoogleSpreadsheet('1UVjq5xho-zuOPUFiUhhKDZxl85KzYgCQ1OXh2dzzfgw');
var sheet;
  app.get('/', function (req, res) {
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
  
    doc.getInfo(function(err, info) {
    
      console.log('Loaded doc: '+info.title+' by '+info.author.email);
    
      sheet = info.worksheets[0];
       res.status(200).json(sheet)
      //step(new Error(sheet));
     // console.log(sheet.title)
     //console.log('sheet name: '+sheet.title+' '+sheet.rowCount+'x'+sheet.colCount);
    step();
   
    }); 

 
    
  }
  ])
});

// Create a document object using the ID of the spreadsheet - obtained from its URL.

var doc = new GoogleSpreadsheet('1JYXOnBmNObbmcrMAtQO_hiG5g5N9hhJjphhg2fyZCGw');
// Authenticate with the Google Spreadsheets API.

doc.useServiceAccountAuth(creds, function (err) {
app.get('/get', function (req, res) {
  // Get all of the rows from the spreadsheet
  doc.getRows(1, function (err, rows) {
 if (err) {
      return next(err)
    } else {
      res.status(200).json(rows)
       console.log(rows);
    }
 //   console.log(rows);
console.log(rows.length);
  });
});
})
app.post('/read1', function (req, res) {
//console.log(req.body);
var designation= req.body.designation;
//console.log(designation)
if (designation=="Living Status?") {
   function printStudent(question){
   console.log('name: ${question.name}');
   console.log('question: ${question.question}');
   //console.log('sub 1 tab: ${student.sub 1 tab}');
}
async function accessSpreadsheet(){
  const doc = new GoogleSpreadsheet('1JYXOnBmNObbmcrMAtQO_hiG5g5N9hhJjphhg2fyZCGw');
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  const sheet = info.worksheets[0];
 const rows = await promisify(sheet.getRows)({
   offset:11,
   limit:8
 }) ;
    rows.forEach(row=>{
   //  printStudent(rows)
    res.status(200).json(rows);
 
  
    })
  
}accessSpreadsheet();
    }else if (designation=="Medical/Physical") {
      function printStudent(question){
   console.log('name: ${question.name}');
   console.log('question: ${question.question}');
   //console.log('sub 1 tab: ${student.sub 1 tab}');
}
async function accessSpreadsheet(){
  const doc = new GoogleSpreadsheet('1JYXOnBmNObbmcrMAtQO_hiG5g5N9hhJjphhg2fyZCGw');
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  const sheet = info.worksheets[0];
 const rows = await promisify(sheet.getRows)({
   offset:20,
   limit:10
 }) ;
    rows.forEach(row=>{
   //  printStudent(rows)
    res.status(200).json(rows);
 
  
    })
  
}accessSpreadsheet();
    }
    else if (designation=="Recent Falls?") {
function printStudent(question){
   console.log('name: ${question.name}');
   console.log('question: ${question.question}');
   //console.log('sub 1 tab: ${student.sub 1 tab}');
}
async function accessSpreadsheet(){
  const doc = new GoogleSpreadsheet('1JYXOnBmNObbmcrMAtQO_hiG5g5N9hhJjphhg2fyZCGw');
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  const sheet = info.worksheets[0];
 const rows = await promisify(sheet.getRows)({
   offset:32,
   limit:6
 }) ;
    rows.forEach(row=>{
   //  printStudent(rows)
    res.status(200).json(rows);
 
  
    })
  
}accessSpreadsheet();
    }
else if (designation=="Chief Complaints") {
function printStudent(question){
   console.log('name: ${question.name}');
   console.log('question: ${question.question}');
   //console.log('sub 1 tab: ${student.sub 1 tab}');
}
async function accessSpreadsheet(){
  const doc = new GoogleSpreadsheet('1JYXOnBmNObbmcrMAtQO_hiG5g5N9hhJjphhg2fyZCGw');
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  const sheet = info.worksheets[0];
 const rows = await promisify(sheet.getRows)({
   offset:39,
   limit:9
 }) ;
    rows.forEach(row=>{
   //  printStudent(rows)
    res.status(200).json(rows);
 
  
    })
  
}accessSpreadsheet();
}
 else if (designation=="Activities & Employment") {
function printStudent(question){
   console.log('name: ${question.name}');
   console.log('question: ${question.question}');
   //console.log('sub 1 tab: ${student.sub 1 tab}');
}
async function accessSpreadsheet(){
  const doc = new GoogleSpreadsheet('1JYXOnBmNObbmcrMAtQO_hiG5g5N9hhJjphhg2fyZCGw');
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  const sheet = info.worksheets[0];
 const rows = await promisify(sheet.getRows)({
   offset:5,
   limit:7
 }) ;
    rows.forEach(row=>{
   //  printStudent(rows)
    res.status(200).json(rows);
 
  
    })
  
}accessSpreadsheet();
}   
  })
app.get('/read', function (req, res) {
 function printStudent(question){
   console.log('name: ${question.name}');
   
   //console.log('sub 1 tab: ${student.sub 1 tab}');
}
async function accessSpreadsheet(){
  const doc = new GoogleSpreadsheet('1JYXOnBmNObbmcrMAtQO_hiG5g5N9hhJjphhg2fyZCGw');
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  const sheet = info.worksheets[0];
    const rows = await promisify(sheet.getRows)({  
      query: 'st2=st3 or st2=st4 or st2=h1 or st2=h2'
    });
    rows.forEach(row=>{
  
    res.status(200).json(rows);
 
  
    })
  
}accessSpreadsheet();
 })
app.post('/create', function (req, res) {
   //radio: req.body.radio
 //console.log(radio)
 
    console.log(req.body)
  var st2=req.body.st2;
 // console.log(st2)
 var name=req.body.Options;
var newrow = {
               questionno: req.body.question,
               answer:req.body.Options,
               question1: req.body.name
            };
            doc.addRow(1, newrow, function( err, rows ){
                if (err) console.log(err);
                console.log(rows);
              
              });



  // console.log(name)
     if (name=="yes" ) {
 function printStudent(question){
   console.log('name: ${question.name}');
   console.log('question: ${question.question}');
   //console.log('sub 1 tab: ${student.sub 1 tab}');
}
async function accessSpreadsheet(){
  const doc = new GoogleSpreadsheet('1JYXOnBmNObbmcrMAtQO_hiG5g5N9hhJjphhg2fyZCGw');
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  const sheet = info.worksheets[0];
 // console.log('Title: ${sheet.title}, Rows: ${sheet.rowCount}')
   //console.log(st2)
  // var s1=st2+'=yes';
   //console.log("'Visibility="+s1+"'");
    const rows = await promisify(sheet.getRows)({
       
      query: 'run="'+st2+'=yes"'
    
    });
    rows.forEach(row=>{
   //  printStudent(rows)
    res.status(200).json(rows);
 
  
    })
  
}accessSpreadsheet();
    }else{
   function printStudent(student){
   console.log('name: ${student.name}');
   //console.log('sub 1 tab: ${student.sub 1 tab}');
}
async function accessSpreadsheet(){
  const doc = new GoogleSpreadsheet('1JYXOnBmNObbmcrMAtQO_hiG5g5N9hhJjphhg2fyZCGw');
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  const sheet = info.worksheets[0];
 // console.log('Title: ${sheet.title}, Rows: ${sheet.rowCount}')
    const rows =await promisify(sheet.getRows)({
       
      query: 'run="'+st2+'=no"'
    });
    rows.forEach(row=>{
     printStudent(rows)
    res.status(200).json(rows);
 
  
    })
  
}accessSpreadsheet();    
          }
        })

/**app.post('/create', function (req, res) {
   var newrow = {
               name: req.body.name,
               phone:req.body.phone,
               class: req.body.class
            };
            doc.addRow(1, newrow, function( err, rows ){
                if (err) console.log(err);
                console.log(rows);
              
              });

          })
   **/     
app.delete('/delete',function (req, res){
  doc.getRows(1, function (err, rows) {
  query: 'class =MA'
rows[2].del();
 //doc.deleteRow(1, { name:req.body.name}, function( err, rows ){
            
                if (err) console.log(err);
                console.log(rows);
          
             });
  })
app.put('/update',(req,res, next)=>{
  let offset =  1
    let updateObject = {
 
      requests:
        [{
          insertTextRequest : 
            {
              text : 'John Doe',
              location : {
                index : offset
              }
            }
        }]
      } 
    doc.documents.batchUpdate(updateObject,function(e,r){
      console.log(e)
      console.log(r)
    });
});

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})