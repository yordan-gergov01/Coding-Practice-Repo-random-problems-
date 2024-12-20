import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [books, setBooks] = useState([]);

  function handleAddNewBook() {
    if (inputValue.trim() === "") return;

    const newBook = {
      id: Date.now(),
      bookName: inputValue,
      isRead: false,
    };

    setBooks([...books, newBook]);
    setInputValue("");
  }

  function handleDeleteBook(bookId) {
    const filtered = books.filter((book) => book.id !== bookId);
    setBooks(filtered);
  }

  return (
    <div>
      <h1>My Book List</h1>
      <input
        type="text"
        placeholder="Add new book"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddNewBook}>Add Book</button>
      <ul>
        {books.map((book) => (
          <>
            <div>
              <li key={book.id}>{book.bookName}</li>
              <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
              <button>Finished</button>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
}

export default App;
