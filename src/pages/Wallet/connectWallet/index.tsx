import { Button, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { ethers } from "ethers";
import React, { useState } from "react";
import './style.css'
import ETH from '../../../assets/eth.png'

declare global {
  interface Window {
    ethereum: any;
  }
}

export default function ConnectWallet() {
  const [errorMessage, setErrorMessage] = useState("");
  const [connButtonText, setConnButtonText] = useState("Connect Button");
 
  const [defaultAccount, setDefaultAccount] = useState(null);

  const connectWallet = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result: any[]) => {
          accountChangedHandler(result[0]);
        });
    } else {
      
      
    }
  };

  const accountChangedHandler = (newAccount: React.SetStateAction<null>) => {
    setDefaultAccount(newAccount);
  };

  return (
    <div className="sending">
      <Grid container spacing={0} direction="row">
        <Grid item>
        
          <Grid container direction="column" spacing={2} className="login-form">
            <Paper
              variant="elevation"
              elevation={2}
              className="login-background"
            >
                <Grid className="circle-grid" item>
              <CardMedia style={{height: 100, padding: '45%'} } image={ETH}></CardMedia>
              </Grid>
              <Grid item>
                
                <Typography className="typography" component="h1" variant="h5">
                  Bem-Vindo a carteira ETH
                </Typography>
              </Grid>
              <Typography color="GrayText"variant="caption" display="block">
                  Se conecte a MetaMask para acessar a carteira
              </Typography>
              
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
