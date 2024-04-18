const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

const totalIngredients = ingredients.map((el) => {
  const ingredientEl = document.createElement("li");

  ingredientEl.classList.add("item");
  ingredientEl.textContent = el;
  return ingredientEl;
});

ingredientsRef.append(...totalIngredients);
