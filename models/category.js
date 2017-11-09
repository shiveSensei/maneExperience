const mongoose = require('mongoose');
const config = require('../config/config');
const Schema = require('mongoose').Schema;
//Service Schema


const CategorySchema = mongoose.Schema({

  name: {
    type: String,
    required: true
  }

});

const Category = module.exports = mongoose.model('Category', CategorySchema);


module.exports.addCategory = function(newCategory, callback){

  newCategory.save(callback);
}

module.exports.getCategories = function(callback){
  Category.find(callback);

}
