var express =require('express');
var router = express.Router();
var Hero =require('../models/Schema');

var bodyParser= require('body-parser');
var app =express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
router.post('/create',(req,res, next)=>{
	var newHero =new Hero({
		name: req.body.name,
		description: req.body.description
	});
	newHero.save((err,hero)=>{
		if (err)
		res.status(500).json ({ errmsg: err});
	res.status(200).json({msg: hero});
	});
});

router.get('/read',(req,res, next)=>{
	Hero.find({},(err,heroes)=>{
	if (err)
		res.status(500).json ({ errmsg: err});
	res.status(200).json({msg: heroes});
	});	
	});
router.put('/update',(req,res, next)=>{
	Hero.findById(req.body._id,(err,hero)=>{
		if (err)
		res.status(500).json ({ errmsg: err});
       hero.name = req.body.name;
       hero.description = req.body.description;
      hero.save((err,hero)=>{
		if (err)
		res.status(500).json ({ errmsg: err});
	res.status(200).json({msg: hero});
	});
	});
	});
router.delete('/delete/:id',(req,res, next)=>{
	Hero.findOneAndRemove({_id:req.params.id},(err, hero)=>{
		if(err)
		res.status(500).json ({ errmsg: err});
	res.status(200).json({msg: hero});	
	});
});
module.exports= router;