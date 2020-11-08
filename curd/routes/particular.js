const express = require('express');
const app = express();
const employeeRoute = express.Router();
var bodyParser = require('body-parser');
// Employee model
let Employee = require('../models/Employee');
var fs = require('fs');
var csv = require("fast-csv");
var stream = fs.createReadStream(csvfile);
var csvfile = __dirname + "/../public/files/products.csv";
// Add Employee
employeeRoute.route('/create').post((req, res, next) => {
  Employee.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Employees
employeeRoute.route('/').get((req, res) => {
  Employee.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single employee
employeeRoute.route('/read/:id').get((req, res) => {
  Employee.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update employee
employeeRoute.route('/update/:id').put((req, res, next) => {
  Employee.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete employee
employeeRoute.route('/delete/:id').delete((req, res, next) => {
  Employee.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

var urlencodedParser = bodyParser.urlencoded({ extended: false })

employeeRoute.get('/import', function(req, res, next) {

    var  employees  = []
    var csvStream = csv()
    .on("data", function(data){
         
         var employee = new Employee({
              name: data[0] ,
              email: data[1]   ,
              designation: data[2],
              phoneNumber: data[3]
            
         });
         
          employee.save(function(error){
            console.log(employee);
              if(error){
                   throw error;
              }
          }); 

    }).on("end", function(){

    });
  
    stream.pipe(csvStream);
    res.json({success : "Data imported successfully.", status : 200});
     
  })
employeeRoute.get('/fetchdata', function(req, res, next) {
    
    Employee.find({}, function(err, docs) {
        if (!err){ 
            res.json({success : "Updated Successfully", status : 200, data: docs});
        } else { 
            throw err;
        }
    });
  
});
module.exports = employeeRoute;