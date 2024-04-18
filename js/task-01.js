const categoriesRef = document.querySelector("#categories");

console.log(`Number of categories: ${categoriesRef.children.length}`);

[...categoriesRef.children].forEach((element) =>
  console.log(`Category: ${element.firstElementChild.textContent}
Elements: ${element.lastElementChild.children.length}`)
);
