const express = require('express');
const recipeController = express.Router();
// Import Inventory Schema
const db = require( '../models' ); 
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

recipeController.get('/search/recipe/:recipe/food/:food/expiration/:expiration', search);


//// Apollo Code


// These routes provide us with the ability to see the data parsed in the api.


router.get("/api/posts", function (req, res) {
 
  db.Post.findAll({
  order: [['updatedAt', 'DESC']],

    include: [db.Author]

  }).then(function (dbPost) {
    res.json(dbPost);
  });
});

router.get("/api/posts/:id", function (req, res) {
  db.Post.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbPost) {
    res.json(dbPost);
  });
});

router.post("/api/posts", function (req, res) {
  db.Post.create(req.body).then(function (dbPost) {
    res.render('dashboard');
  });
});

router.delete("/api/posts/:id", function (req, res) {
  db.Post.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (dbPost) {
    res.json(dbPost);
  });
});

router.put("/api/posts", function (req, res) {
  db.Post.update(
    req.body, {
      where: {
        id: req.body.id
      }
    }).then(function (dbPost) {
    res.json(dbPost);
  });
});

module.exports = router;

/// 

module.exports = {
  recipeController,
}

// CAlling API

$recipeapi = "https://api.edamam.com/search";

$params = [
    'q'       => 'chicken',
    'app_id'  => $APP,
    'app_key' => $KEY,
    'from'    => 0,
    'to'      => 3,
    'health'  => 'alcohol-free',
];

$client   = new \GuzzleHttp\Client;

$response = $client->get($recipeapi, [
    'query'  => $params,
    'verify' => false,
]);


$data = (string) $response->getBody();