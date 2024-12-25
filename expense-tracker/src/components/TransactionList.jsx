function TransactionList({ transactions, onDeleteTransaction }) {
  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description} - ${transaction.amount} (
            {transaction.category})
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
