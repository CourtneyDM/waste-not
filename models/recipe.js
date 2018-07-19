const mongoose = require('mongoose');
const Schema = mongoose.Schema


const RecipeSchema = new Schema({
  name: String,
  url: String,
  imgUrl: String,
  source: String,
  sourceUrl: String,
  yield: Number,
  calories: Number,
  ingredients: [String],
  yield: Number,
  reviews: [Review.schema]
})

const Recipe = mongoose.model( 'Recipe', recipeSchema );
module.exports = recipe;



