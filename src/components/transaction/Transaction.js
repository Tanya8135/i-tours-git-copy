import TransactionHistory from "./transactionHistory";
import transactions from "../data/transactions.json";

const Transaction = () => {
  return (
    <div>
      <table className="transaction-history">
        <TransactionHistory />
      </table>
    </div>
  )
}

export default Transaction;