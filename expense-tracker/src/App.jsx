import { useEffect, useState } from "react";

import Summary from "./components/Summary";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions");

    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

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
      <Summary transactions={transactions} />
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionList
        transactions={transactions}
        onDeleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default App;
