// styles
import styles from "./TransactionsList.module.css";

// react icons
import { FaTrash } from "react-icons/fa";
import { useFirestore } from "../hooks/useFirestore";

function TransactionsList({ transactions }) {
  const { deleteDocument } = useFirestore();
  return (
    <div>
      {transactions.map((transaction) => {
        const { id, title, price } = transaction;
        return (
          <div key={id} className={styles.card}>
            <h4>{title}</h4>
            <p>$ {price}</p>
            <span className={styles.trash} onClick={() => deleteDocument(id)}>
              <FaTrash />
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default TransactionsList;
