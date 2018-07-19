import React, { Component } from 'react';
import { CardDeck, CardBasic } from '../../components/Card';


class Recipes extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <CardBasic
                        header='Recipes'>

////////////

globalRecipe.unshift(edamamApiRecipe)
  let ingredientsFormattedList = renderIngredient(edamamApiRecipe.ingredients)
  let preDbRecipeModal = (`
let preDbRecipeModal = (`

<div class='modal modal-transparent fade tempModal' tabindex='-1' role='dialog' id='recipeModal'>
      <div class='modal-dialog'>
        <div class='recipe' data-recipe-id=''>
          <div class='col-md-12'>
            <div class='col-md-5'>
           
            </div>
            <div class='col-md-6 caption'>
              <h4 class='inline-header'><strong>${edamamApiRecipe.name}</strong></h4>
              <p>via<a href='${edamamApiRecipe.sourceUrl}'> ${edamamApiRecipe.source}</a></p>
              <h4 class='inline-header'><strong>Ingredients:</strong></h4>
              <ul>${ingredientsFormattedList}</ul>
              <h4 class='inline-header'><strong>Yield:</strong></h4>
              <ul>${edamamApiRecipe.yield}</ul>
              <div class='bottom-align-buttons'>
                <button type='button' class='btn btn-primary add-recipe'><span class='icon'><i class='fa fa-plus'></i></span> Add This Recipe</button>
                <button type='button' class='btn btn-danger close-recipe'><span class='icon'><i class='fa fa-trash-o'></i></span> Not This Recipe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `)
  $('#modals').prepend(preDbRecipeModal)
  $('#recipeModal').modal('show')
}



//////



                    </CardBasic>
                </CardDeck>
            </div>
        );
    };
};

export default Recipes;


