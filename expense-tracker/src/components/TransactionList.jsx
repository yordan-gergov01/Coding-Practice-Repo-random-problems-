import "./TransactionList.css";

function TransactionList({ transactions, onDeleteTransaction }) {
  return (
    <div className="transaction-list">
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <span className="description">{transaction.description}</span>
            <span
              className="category"
              style={{
                backgroundColor:
                  transaction.category === "income" ? "green" : "red",
              }}
            >
              {transaction.category.toUpperCase()}
            </span>
            <span className="amount">${transaction.amount.toFixed(2)}</span>
            <button onClick={() => onDeleteTransaction(transaction.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
