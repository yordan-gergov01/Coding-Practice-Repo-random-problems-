function TransactionForm() {
  return (
    <div>
      <h2>Add New Transaction</h2>
      <form>
        <input type="text" placeholder="Description" />
        <input type="number" placeholder="Amount" />
        <select>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="shopping">Shopping</option>
        </select>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
