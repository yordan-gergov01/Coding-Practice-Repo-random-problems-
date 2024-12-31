function RecipeList({ recipes, onSelectRecipe }) {
  //   if (recipes.length === 0) {
  //     return <p>No recipes found. Please, try searching for something else!</p>;
  //   }

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.idMeal} onClick={() => onSelectRecipe(recipe)}>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h2>{recipe.strMeal}</h2>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
