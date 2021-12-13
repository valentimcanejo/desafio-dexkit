import logo from "./logo.svg";
import "./App.css";
import Wallet from "./pages/Wallet";
import SendingTransaction from "./pages/Status/sendingTransaction";
import React, { useState } from "react";
import TransactionFailed from "./pages/Status/transactionFailed";
import TransactionAccepted from "./pages/Status/transactionAccepted";
import ConnectWallet from "./pages/Wallet/connectWallet";
import { ethers, providers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";

declare global {
  interface Window {
    ethereum: any;
  }
}





function App() {
  
  const [ accounts, setAccounts ] = useState()
  

   if(window.ethereum){
     window.ethereum
       .request({ method: "eth_requestAccounts" })
       .then((result: any[]) => {
         setAccounts(result[0]);
       });
   } else {
    alert("Install MetaMask");
    
   }
    
 console.log(accounts)

  return (
    <>
      {/* {connected ? <Wallet></Wallet> : <ConnectWallet />} */}

      {accounts === undefined ? <ConnectWallet /> : <Wallet accounts={accounts} />}

      {/* <ConnectWallet/> */}

      {/* <Wallet></Wallet>  */}
      {/* <SendingTransaction></SendingTransaction> */}
      {/* <TransactionFailed></TransactionFailed> */}
      {/* <TransactionAccepted></TransactionAccepted> */}
    </>
  );
}

export default App;
