var http =require('http');
var express =require('express');
var port =process.env.PORT|| 3000;
var app =express();
var cors =require('cors');
var bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());

var mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/hero');
var Routes =require('./routes/Routes');

app.use('/',Routes);

http.createServer(app).listen(port);
console.log("Backend running on port:", port);