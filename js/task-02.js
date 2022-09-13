const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const makeIngredientsEl = ingredients => {
  return ingredients.map(ingredient => {
    const element = document.createElement('li');
    element.classList.add('item');
    element.textContent = ingredient;

    return element;
  });
};

const ingredientsItemEl = makeIngredientsEl(ingredients);
ingredientsEl.append(...ingredientsItemEl);


