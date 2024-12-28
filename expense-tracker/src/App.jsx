import { useEffect, useState } from "react";

import Summary from "./components/Summary";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import "./App.css";

import { getInitialTransactions } from "./utils/localStorage";

function App() {
  const [transactions, setTransactions] = useState(getInitialTransactions);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  function addTransaction(description, amount, category) {
    const parsedAmount =
      category === "expense" ? -Math.abs(amount) : Math.abs(amount);

    const newTransaction = {
      id: Date.now(),
      description,
      amount: parsedAmount,
      category,
    };

    setTransactions([...transactions, newTransaction]);
  }

  function deleteTransaction(id) {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id)
    );
  }

  return (
    <div className="container">
      <h1>Expense Tracker 💸</h1>
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionList
        transactions={transactions}
        onDeleteTransaction={deleteTransaction}
      />
      <Summary transactions={transactions} />
    </div>
  );
}

export default App;
