import logo from './logo.svg';
import './App.css';
import Wallet from './pages/Wallet';
import SendingTransaction from './pages/Status/sendingTransaction';
import React from 'react';
import TransactionFailed from './pages/Status/transactionFailed';
import TransactionAccepted from './pages/Status/transactionAccepted';



function App() {
  return (
    <section>
      
        
       <Wallet></Wallet> 
      {/* <SendingTransaction></SendingTransaction> */}
     {/* <TransactionFailed></TransactionFailed> */}
      {/* <TransactionAccepted></TransactionAccepted> */}
      </section>
  );
}

export default App;
