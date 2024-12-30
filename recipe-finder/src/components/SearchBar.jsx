import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (query.trim() === "") return;

    onSearch(query);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a recipe..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search Recipe</button>
    </form>
  );
}

export default SearchBar;
