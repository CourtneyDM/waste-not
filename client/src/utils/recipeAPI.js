import axios from 'axios';

export default {

    getRecipeAPI: query => {
        const X_APP_KEY = 'c3b26ca2cb01642505add4d1060c2b6e';
        const X_APP_ID = '72c10b6c';
        return axios( {
            method: 'get',
            url: `https://api.edamam.com/search`,
            headers: {
                'e-app-key': e_APP_KEY,
                'e-app-key': e_APP_ID
            }
        } );
    },

    getRecipeDetails: query => {
        const X_APP_KEY = 'c3b26ca2cb01642505add4d1060c2b6e';
        const X_APP_ID = '72c10b6c';
        return axios( {
            method: 'get',
            url: `https://api.edamam.com/search`,
            headers: {
                'e-app-key': e_APP_KEY,
                'e-app-key': e_APP_ID
            }
        });
    }
}
getRecipe: () => {
    console.log( 'recipe...' );
    return axios.get( '/api/recipe' );
},



  // Save a food item to inventory
  saveRecipe: recipeData => {
    console.log( 'saving to recipes...' );
    return axios.post( '/api/recipes', recipeData );
},



deleteRecipe: id => {
    console.log( id );
    return axios.delete( '/api/recipes/' + id );
}



////


$(document).ready(function () {
    $.ajax({
      method: 'GET',
      url: '/api/recipes',
      success: function (recipes) {
        recipes.forEach(renderRecipes)
      },
      error: function (err) {
        throw err
      }
    })
  
    $('#searchRecipe').on('submit', function (e) {
      e.preventDefault()
      getRecipes()
    })
  
    // search modal save recipe button
    $('#modals').on('click', '.add-recipe', postRecipes)
  
    // search modal save recipe button
    $('#modals').on('click', '.close-recipe', closeRecipe)
  
    // add review button now opens modal
    $('#recipes').on('click', '.add-review', function (e) {
      let id = $(this).closest('.recipe').data('recipe-id')
      $('#reviewModal').data('recipe-id', id)
      $('#reviewModal').modal('show')
    })
  
    // catch and handle the click on add review button
    $('#recipes').on('click', '.add-review', function handleAddReviewClick (e) {
      const recipeId = $(this).closest('.recipe').data('recipe-id')
      $('#reviewModal').data('recipe-id', recipeId)
      $('#reviewModal').modal('show')
    })
  
    // save review modal save button
    $('#saveReview').on('click', handleNewReviewSubmit)
  
    // edit recipe click to pop modal
    $('#recipes').on('click', '.edit-recipe', function handleEditRecipeClick (e) {
      const recipeId = $(this).closest('.recipe').data('recipe-id')
      $('#editModal').data('recipe-id', recipeId)
      $('#editModal').modal('show')
    })
  
    // edit recipe click to save changes
    $('#saveEdit').on('click', handleEditRecipeClick)
  
    // delete recipe when its delete button is clicked
    $('#recipes').on('click', '.delete-recipe', handleDeleteRecipeClick)
  
    // transparent modal addClass functions
    $('.modal-transparent').on('show.bs.modal', function () {
      setTimeout(function () {
        $('.modal-backdrop').addClass('modal-backdrop-transparent')
      }, 0)
    })
    $('.modal-transparent').on('hidden.bs.modal', function () {
      $('.modal-backdrop').addClass('modal-backdrop-transparent')
    })
  }) // end of document.ready//
  
  // when a delete button for a specific recipe is clicked
  function handleDeleteRecipeClick (e) {
    const recipeId = $(this).parents('.recipe').data('recipe-id')
    $.ajax({
      url: '/api/recipes/' + recipeId,
      method: 'DELETE',
      success: function handleDeleteRecipeSuccess (data) {
        let deletedRecipeId = data._id
        $('div[data-recipe-id=' + deletedRecipeId + ']').remove()
      }
    })
  }
  
  function handleEditRecipeClick (e) {
    let newName = $('#editName').val()
    console.log(newName)
    const recipeId = $('#editModal').data('recipe-id')
    console.log(recipeId)
    $.ajax({
      url: '/api/recipes/' + recipeId,
      method: 'PUT',
      data: {name: newName},
      success: function (recipe) {
        $(`.recipe[data-recipe-id='${recipeId}']`).remove()
        renderRecipes(recipe)
      }
    })
    $('#editModal').modal('hide')
  }
  
  // getting recipe from edamam API
  function getRecipes () {
    $.ajax({
      method: 'GET',
      url: 'https://api.edamam.com/search',
      data: $('form').serialize(),
      dataType: 'json',
      success: renderModalSearchRecipe,
      error: function getApiRecipesError () {
        console.log('Get Recipes Error')
      }
    })
  }
  
  // store found recipe in global variable
  let globalRecipe = []
  
  // takes api data and puts on modal
  function renderModalSearchRecipe (recipes) {
    globalRecipe = []
    let edamamApiRecipe = {
      name: recipes.hits[0].recipe.label,
      calories: recipes.hits[0].recipe.calories,
      healthLabels: recipes.hits[0].recipe.healthLabels,
      source: recipes.hits[0].recipe.source,
      sourceUrl: recipes.hits[0].recipe.url,
      imgUrl: recipes.hits[0].recipe.image,
      ingredients: recipes.hits[0].recipe.ingredientLines,
      yield: recipes.hits[0].recipe.yield
    }