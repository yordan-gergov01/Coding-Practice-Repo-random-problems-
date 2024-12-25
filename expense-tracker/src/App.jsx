import { useState } from "react";
import Summary from "./components/Summary";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState([]);

  function addTransaction(description, amount, category) {
    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      category,
    };

    setTransactions((prev) => [...prev, newTransaction]);
  }

  function deleteTransaction(id) {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id)
    );
  }

  return (
    <div>
      <h1>Expense Tracker 💸</h1>
      <Summary />
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionList
        transactions={transactions}
        onDeleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default App;
