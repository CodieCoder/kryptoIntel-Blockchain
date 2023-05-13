import React from "react";

interface ITransactionContext {
  connectWallet: any;
  currentAccount: any;
  formData: {
    addressTo: string;
    amount: string;
    keyword: string;
    message: string;
  };
  handleChange: (e: any, name: string) => void;
  sendTransaction: any;
  transactions: any;
  transactionCount: any;
  isLoading: boolean;
}

//@ts-ignore
const TransactionContext: React.Context<ITransactionContext> =
  React.createContext({
    connectWallet: undefined,
    currentAccount: undefined,
    formData: { addressTo: "", amount: "", keyword: "", message: "" },
    handleChange: () => {},
    sendTransaction: undefined,
    transactions: undefined,
    transactionCount: undefined,
    isLoading: false,
  });

export default TransactionContext;
