import { useState } from "react";
import Summary from "./components/Summary";
import TransactionForm from "./components/TransactionForm";

function App() {
  const [transactions, setTransactions] = useState([]);

  function addTransaction(description, amount, category) {
    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      category,
    };

    setTransactions((prev) => [prev, newTransaction]);
  }

  return (
    <div>
      <h1>Expense Tracker 💸</h1>
      <Summary />
      <TransactionForm onAddTransaction={addTransaction} />
    </div>
  );
}

export default App;
