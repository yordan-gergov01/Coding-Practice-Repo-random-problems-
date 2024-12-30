import { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  async function getRecipes(query) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();
      setRecipes(data.meals || []);
    } catch (err) {
      console.error("Error fetching recipes:", err);
    }
  }

  function handleSelectRecipe(recipe) {
    setSelectedRecipe(recipe);
  }

  return (
    <div className="app">
      <h1>Recipe Finder 🍨</h1>
      <SearchBar onSearch={getRecipes} />
      <RecipeList recipes={recipes} onSelectRecipe={handleSelectRecipe} />
    </div>
  );
}

export default App;
