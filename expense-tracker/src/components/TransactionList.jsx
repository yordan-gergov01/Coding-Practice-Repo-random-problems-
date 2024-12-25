function TransactionList({ transactions, onDeleteTransaction }) {
  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <span>{transaction.description} </span>
          <span>
            ${transaction.amount.toFixed(2)} -{" "}
            <strong
              style={{
                color: transaction.category === "income" ? "green" : "red",
              }}
            >
              {transaction.category.toUpperCase()}
            </strong>
          </span>
          <button onClick={() => onDeleteTransaction(transaction.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TransactionList;
