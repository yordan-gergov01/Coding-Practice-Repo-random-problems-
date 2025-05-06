const container = document.getElementById("root");
const ul = document.createElement("ul");

async function fetchBooks() {
  const response = await fetch("http://localhost:3060/books");
  const data = await response.json();

  data.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.title} by ${item.author}`;
    ul.appendChild(li);
  });

  container.appendChild(ul);
}

fetchBooks();
