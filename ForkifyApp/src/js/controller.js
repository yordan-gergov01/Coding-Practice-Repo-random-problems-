// Project API - https://forkify-api.jonas.io

const recipeContainer = document.querySelector('.recipe');

function timeout(s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
}

async function showRecipe() {
  try {
    const response = await fetch(
      'https://forkify-api.jonas.io/api/v2/recipes/664c8f193e7aa067e94e8433'
    );
    const data = await response.json();

    if (!response.ok)
      console.log(`Error: ${data.message} (${response.status})`);

    let { recipe } = data.data;

    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    console.log(recipe);
  } catch (error) {
    console.error(error);
  }
}
showRecipe();
