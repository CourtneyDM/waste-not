// Import Dependencies
const mongoose = require( 'mongoose' );

// Setup Schema
const Schema = mongoose.Schema;

// Define Inventory Schema
const recipeSchema = new Schema( {
    itemName: {
        type: String,
        required: true
    },
    itemBrandName: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    bestByDate: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
} );

const Recipe = mongoose.model( 'Recipe', recipeSchema );
module.exports = recipe;