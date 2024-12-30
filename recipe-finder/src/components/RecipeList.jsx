function RecipeList({ recipes, onSelectedRecipe }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.idMeal} onClick={() => onSelectedRecipe(recipe)}>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h2>{recipe.strMeal}</h2>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
