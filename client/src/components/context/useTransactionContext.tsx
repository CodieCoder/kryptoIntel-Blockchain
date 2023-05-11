import { useContext } from "react";
import TransactionContext from "./Context";

export const useTransactioContext = () => {
  const value = useContext(TransactionContext);
  return value;
};
