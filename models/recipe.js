// Import Dependencies
const mongoose = require( 'mongoose' );

// Setup Schema
const Schema = mongoose.Schema;

// Define Inventory Schema
const recipeSchema = new Schema( {
    recipe: {
        type: String,
        required: true
    },
    food: {
        type: String,
    },
    expiration: {
        type: Number,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
} );

const Recipe = mongoose.model( 'Recipe', recipeSchema );
module.exports = recipe;



// NEW

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Review = require('./review.js')
const Ingredient = require('./ingredient.js')

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

const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = Recipe