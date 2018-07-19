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