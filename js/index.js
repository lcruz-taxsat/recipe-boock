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
  }
];

function renderModel(recipes) {
  let recipe =  recipes[0];
  document.getElementById('recipe-name').textContent = recipe.name;
  for(let ingredient of recipe.ingredients ){
    let ingredientView = createIngredientView(ingredient);
    document.getElementById('recipe-ingredients').appendChild(ingredientView);
  }

  for(let step of recipe.steps ){
    let stepView = createStepView(step);
    document.getElementById('recipe-steps').appendChild(stepView);
  }
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
