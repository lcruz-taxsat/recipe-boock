let recipes = [
  {
    name: 'cake',
    ingredients: [
      {name: 'milk', quantity: 1, unit: 'cup'},
      {name: 'flour', quantity: 1, unit: 'cup'},
      {name: 'eggs', quantity: 2, unit: 'piece'},
    ],
    steps: [
      {description: 'mix all'},
      {description: 'put in bowl'},
      {description: 'put in oven'},
      {description: 'take out from oven'},
      {description: 'let it rest'},
    ]
  },
  {
    name: 'strawberry cake',
    ingredients: [
      {name: 'milk', quantity: 1, unit: 'cup'},
      {name: 'flour', quantity: 1, unit: 'cup'},
      {name: 'eggs', quantity: 2, unit: 'piece'},
      {name: 'strawberries', quantity: 10, unit: 'piece'},
    ],
    steps: [
      {description: 'mix all'},
      {description: 'put in bowl'},
      {description: 'put in oven'},
      {description: 'take out from oven'},
      {description: 'let it rest'},
    ]
  }
];

function renderModel(recipes) {
  let recipesView = document.getElementById('recipes-container');

  for(let recipe of recipes){
    let recipeView = creteRecipeView(recipe);
    recipesView.appendChild(recipeView);
  }
}

function creteRecipeView(recipe) {
  let recipeView = document.createElement('div');
  let recipeNameView = document.createElement('h2');
  let recipeIngredientsView = document.createElement('ul');
  let recipeStepsView = document.createElement('ul');

  recipeNameView.textContent = recipe.name;

  for(let ingredient of recipe.ingredients ){
    let ingredientView = createIngredientView(ingredient);
    recipeIngredientsView.appendChild(ingredientView);
  }

  for(let step of recipe.steps ){
    let stepView = createStepView(step);
    recipeStepsView.appendChild(stepView);
  }


  recipeView.appendChild(recipeNameView);

  let ingredientsTitle = document.createElement('h2');
  ingredientsTitle.textContent = 'Ingredients:';

  recipeView.appendChild(ingredientsTitle);
  recipeView.appendChild(recipeIngredientsView);

  let stepsTitle = document.createElement('h2');
  stepsTitle.textContent = 'Steps:';

  recipeView.appendChild(stepsTitle);
  recipeView.appendChild(recipeStepsView);

  return recipeView;
}



function createIngredientView(ingredient){
  let element = document.createElement('li');
  element.textContent = `${ingredient.name} ${ingredient.quantity} ${ingredient.unit}`;
  return element;
}

function createStepView(step){
  let element = document.createElement('li');
  element.textContent = `${step.description}`;
  return element;
}


renderModel(recipes);
