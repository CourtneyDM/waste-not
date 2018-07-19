const express = require('express');
const recipeController = express.Router();

const axios = require('axios');


const searchRecipes = async (make, model, year) => {

  const uri = 'https://api.edamam.com/search';
  const queryUri = uri + encodeURI(`recipe/${query}/food/${food}/expiration/${expiration}?format=json`);
  return await axios.get(queryUri).then(result => result.data);
};

const search = (req, res, next) => {
  const recipe = req.params.recipe;
  const food = req.params.food;
  const expiration = req.params.expiration;

  searchRecipes(recipe, food, expiration)
    .then( resp => {
      return res.json(resp);
    })
    .catch( err => {
      const httpError = createError(number, message, {
        original: err,
      });
      return next(httpError);
    })
}

searchController.get('/search/recipe/:recipe/food/:food/expiration/:expiration', search);

module.exports = {
  recipeController,
}