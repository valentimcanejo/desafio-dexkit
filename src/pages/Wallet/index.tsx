import React, { useState } from "react";
import { Button, Paper, Typography } from "@mui/material";
import "./styles.css";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { ethers } from "ethers";
import TransactionFailed from "../Status/transactionFailed";

import TransactionAccepted from "../Status/transactionAccepted";
import SendingTransaction from "../Status/sendingTransaction";

declare global {
  interface Window {
    ethereum: any;
  }
}

export default function Wallet({ accounts }: any) {
  const [paste, setPaste] = useState("");

  const [max, setMax] = useState<any | null>(null);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(0);
  const [info, setInfo] = useState([]);
  const [userBalance, setUserBalance] = useState("");
  const [amount, setAmount] = useState();

  const startTransaction = async ({
    setPending,
    setError,
    setInfo,
    ether,
    addr,
  }: any) => {
    try {
      if (!window.ethereum) throw new Error("Install MetaMask");

      setPending(1);
      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(addr);

      const infoE = await signer.sendTransaction({
        to: addr,
        value: ethers.utils.parseEther(ether),
      });

      setAmount(ether);

      setInfo([infoE]);
    } catch (err) {
      setError(err);
    }
  };

  const getAccountBalance = (account: any) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [account, "latest"] })
      .then((balance: ethers.BigNumberish) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  };

  getAccountBalance(accounts.toString());

  async function getPaste() {
    const text = await navigator.clipboard.readText();

    setPaste(text);
  }

  const onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValueAmount = e.target.value;

    setMax(newValueAmount);
  };

  const onChangeToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValueToken = e.target.value;
    setPaste(newValueToken);
  };

  function getMax() {
    setMax(userBalance);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(e.target);

    await startTransaction({
      setPending,
      setError,
      setInfo,
      ether: data.get("ether"),
      addr: data.get("addr"),
    });
  };

  return (
    <div>
      {pending === 1 ? (
        <SendingTransaction er={error} amount={amount} info={info} />
      ) : info.length === 0 ? (
        error.length === 0 ? (
          <div className="wallet">
            <Grid container spacing={0} direction="row">
              <Grid item>
                <Grid
                  container
                  direction="column"
                  spacing={2}
                  className="wallet-form"
                >
                  <Paper
                    variant="elevation"
                    elevation={2}
                    className="wallet-background"
                  >
                    <Grid item>
                      <Typography
                        className="typography"
                        variant="caption"
                        display="block"
                      >
                        {window.ethereum.selectedAddress}
                      </Typography>
                      <Typography
                        className="typography"
                        component="h1"
                        variant="h5"
                      >
                        {userBalance} ETH
                      </Typography>
                    </Grid>
                    <Grid item>
                      <form onSubmit={handleSubmit}>
                        <Typography variant="caption" display="block">
                          Amount
                        </Typography>
                        <Grid container direction="column" spacing={2}>
                          <Grid item>
                            <TextField
                              value={max}
                              className="textField"
                              placeholder="Amount"
                              fullWidth
                              name="ether"
                              variant="outlined"
                              required
                              autoFocus
                              onChange={onChangeAmount}
                              InputProps={{
                                endAdornment: (
                                  <Button
                                    onClick={getMax}
                                    style={{
                                      fontWeight: "bold",
                                      color: "rgba(230,198,139,255)",
                                    }}
                                  >
                                    MAX
                                  </Button>
                                ),
                              }}
                            />
                          </Grid>

                          <Grid item>
                            <Typography variant="caption" display="block">
                              Address
                            </Typography>
                            <TextField
                              onChange={onChangeToken}
                              value={paste}
                              className="textField"
                              placeholder="Address"
                              fullWidth
                              name="addr"
                              variant="outlined"
                              required
                              InputProps={{
                                endAdornment: (
                                  <Button
                                    onClick={getPaste}
                                    style={{
                                      fontWeight: "bold",
                                      color: "rgba(230,198,139,255)",
                                    }}
                                  >
                                    PASTE
                                  </Button>
                                ),
                              }}
                            ></TextField>
                          </Grid>
                          <Grid item>
                            <Button
                              variant="contained"
                              color="primary"
                              type="submit"
                              className="button-block"
                              style={{
                                fontWeight: "bold",
                                color: "black",
                                backgroundColor: "rgba(244,203,98,255)",
                              }}
                            >
                              SEND
                            </Button>
                          </Grid>
                        </Grid>
                      </form>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </div>
        ) : (
          <TransactionFailed error={error} />
        )
      ) : (
        <TransactionAccepted amount={amount} info={info} />
      )}
    </div>
  );
}
