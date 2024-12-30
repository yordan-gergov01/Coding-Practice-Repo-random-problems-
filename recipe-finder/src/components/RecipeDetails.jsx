function RecipeDetails({ recipe, onClose }) {
  if (!recipe) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <h2>{recipe.strMeal}</h2>
        <p>
          <strong>Category: </strong>
          {recipe.strCategory}
        </p>
        <p>
          <strong>Area: </strong>
          {recipe.strArea}
        </p>
        <h3>Ingredients:</h3>
        <ul>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
            const ingredient = recipe[`strIngredient${i}`];
            const measure = recipe[`strMeasure${i}`];
            return (
              ingredient && (
                <li key={i}>
                  {measure} {ingredient}
                </li>
              )
            );
          })}
        </ul>
        <h3>Instructions:</h3>
        <p>{recipe.strInstructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetails;
