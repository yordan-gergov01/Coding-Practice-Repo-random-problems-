function Summary({ transactions }) {
  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div>
      <h2>Summary</h2>
      <p>
        <strong>Income: </strong>
        {totalIncome}$
      </p>
      <p>
        <strong>Expenses: </strong>
        {totalExpenses}$
      </p>
      <p>
        <strong>Balance: </strong>
        {balance}$
      </p>
    </div>
  );
}

export default Summary;
