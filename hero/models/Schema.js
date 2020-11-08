var mongoose =require('mongoose');
 
var heroSchema = mongoose.Schema({
	name: {type: String},
	description: {type: String}
});
module.exports = mongoose.model('heroes', heroSchema);