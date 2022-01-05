import React, { useCallback, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
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

interface Props {
  accounts: any;
}

interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const useStyles = makeStyles(() => ({
  paper: {
    padding: 30,
    textAlign: "center",
    marginLeft: "15px",
  },
  buttonEndAdornment: {
    fontWeight: "bold",
    color: "rgba(230,198,139,255)",
  },
  button: {
    fontWeight: "bold",
    color: "black",
    backgroundColor: "rgba(244,203,98,255)",
  },
  grid: {
    minHeight: "90vh",
  },
  openButton: {
    alignItems: "right",
  },
}));

const Wallet: React.FC<Props> = ({ accounts }) => {
  const classes = useStyles();
  const [paste, setPaste] = useState("");

  const [max, setMax] = useState<any | null>(null);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(0);
  const [info, setInfo] = useState([]);
  const [userBalance, setUserBalance] = useState("");
  const [amount, setAmount] = useState();
  const [history, setHistory] = useState("");
  const [addresses, setAddresses] = useState<string | null>(null);
  const [open, setOpen] = React.useState(false);
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

      localStorage.setItem("addresses", JSON.stringify(addr));
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

  useEffect(() => {
    getAccountBalance(accounts.toString());
    setAddresses(localStorage.getItem("addresses"));
  });

  const getAccountBalance = (account: any) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [account, "latest"] })
      .then((balance: ethers.BigNumberish) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  };

  const onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValueAmount = e.target.value;

    setMax(newValueAmount);
  };

  const onChangeToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValueToken = e.target.value;
    setPaste(newValueToken);
  };

  const getPaste = useCallback(async () => {
    const text = await navigator.clipboard.readText();

    setPaste(text);
  }, []);

  const getMax = () => {
    setMax(userBalance);
  };

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

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      {pending === 1 ? (
        <SendingTransaction er={error} amount={amount} info={info} />
      ) : info.length === 0 ? (
        error.length === 0 ? (
          <Box>
            <Grid
              className={classes.grid}
              container
              justifyContent="center"
              alignItems="center"
              spacing={0}
            >
              {/* {addresses
                ? addresses.map((addr) => {
                    <Typography variant="body1">{addr}</Typography>;
                  })
                : null} */}
              <form onSubmit={handleSubmit}>
                <Grid item>
                  <Paper className={classes.paper}>
                    <Grid spacing={4} container direction="column">
                      <Grid item>
                        <Typography variant="caption" display="block">
                          {window.ethereum.selectedAddress}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="h5" component="h1">
                          {userBalance} ETH
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          align="left"
                          variant="caption"
                          display="block"
                        >
                          Amount
                        </Typography>

                        <TextField
                          value={max}
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
                                className={classes.buttonEndAdornment}
                              >
                                MAX
                              </Button>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Grid item>
                            <Typography variant="caption" display="block">
                              Address
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Button
                              size="small"
                              variant="contained"
                              onClick={handleClickOpen}
                            >
                              Last Address
                            </Button>
                            <BootstrapDialog
                              onClose={handleClose}
                              aria-labelledby="customized-dialog-title"
                              open={open}
                            >
                              <BootstrapDialogTitle
                                id="customized-dialog-title"
                                onClose={handleClose}
                              >
                                Last Address used
                              </BootstrapDialogTitle>
                              <DialogContent dividers>
                                <Typography gutterBottom>
                                  {addresses}
                                </Typography>
                              </DialogContent>
                              <DialogActions>
                                <Button autoFocus onClick={handleClose}>
                                  Ok
                                </Button>
                              </DialogActions>
                            </BootstrapDialog>
                          </Grid>
                        </Grid>

                        <TextField
                          onChange={onChangeToken}
                          value={paste}
                          placeholder="Address"
                          fullWidth
                          name="addr"
                          variant="outlined"
                          required
                          InputProps={{
                            endAdornment: (
                              <Button
                                onClick={getPaste}
                                className={classes.buttonEndAdornment}
                              >
                                PASTE
                              </Button>
                            ),
                          }}
                        ></TextField>
                      </Grid>
                      <Grid item>
                        <Button
                          fullWidth
                          variant="contained"
                          color="primary"
                          type="submit"
                          className={classes.button}
                        >
                          SEND
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </form>
            </Grid>
          </Box>
        ) : (
          <TransactionFailed error={error} />
        )
      ) : (
        <TransactionAccepted amount={amount} info={info} />
      )}
    </Box>
  );
};

export default Wallet;
