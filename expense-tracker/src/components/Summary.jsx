import "./Summary.css";

function Summary({ transactions }) {
  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const balance =
    transactions.category === "expense"
      ? totalIncome - totalExpenses
      : totalIncome + totalExpenses;

  return (
    <div className="summary-container">
      <h2>Summary</h2>
      <p>
        <strong>Income: </strong>${totalIncome.toFixed(2)}$
      </p>
      <p>
        <strong>Expenses: </strong>${Math.abs(totalExpenses).toFixed(2)}$
      </p>
      <p>
        <strong>Balance: </strong>${balance.toFixed(2)}
      </p>
    </div>
  );
}

export default Summary;
