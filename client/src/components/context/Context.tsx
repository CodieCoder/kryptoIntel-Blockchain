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
}

const TransactionContext: React.Context<ITransactionContext> =
  React.createContext({
    connectWallet: undefined,
    currentAccount: undefined,
    formData: { addressTo: "", amount: "", keyword: "", message: "" },
    handleChange: (e, name) => {},
    sendTransaction: undefined,
  });

export default TransactionContext;
