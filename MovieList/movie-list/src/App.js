import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  let newBook = {
    id: Date.now(),
    bookName: "",
    isRead: false,
  };

  return (
    <div>
      <h1>My Book List</h1>
      <input type="text" placeholder="Add new book" />
      <button>Add Book</button>
    </div>
  );
}

export default App;
