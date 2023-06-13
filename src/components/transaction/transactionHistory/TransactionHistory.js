import NameHistory from "./nameHistory";
import InfoHistory from "./infoHistory";
import transactions from "../../data/transactions.json";


const TransactionHistory = () => {
  return (
    <>
      <NameHistory />
      {transactions.map((listTrans) => (
        <InfoHistory key={listTrans.id} {...listTrans} />
      ))}

    </>
  )
}

export default TransactionHistory;