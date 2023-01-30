const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientslesList = document.querySelector("#ingredients")
console.log(ingredientslesList);

ingredients.map(el => {
  const ingredientEl = document.createElement("li")
  ingredientEl.textContent = el
  ingredientslesList.append(ingredientEl)
})