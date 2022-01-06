import {
  Alert,
  Button,
  CardMedia,
  Grid,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./style.css";
import Check from "../../../assets/check.png";
import { makeStyles } from "@material-ui/styles";

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
  buttonA: {
    marginTop: "10px",
    color: "rgba(244,203,98,255)",
    borderColor: "rgba(244,203,98,255)",
  },
  buttonB: {
    color: "rgba(192,192,192,255)",
  },
  buttonC: {
    marginTop: "10px",
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

export default function TransactionAccepted({ amount, info }: any) {
  const [fromUser, setFromUser] = useState("");
  const [toUser, setToUser] = useState("");
  const [show, setShow] = useState(0);
  const [hash, setHash] = useState("");
  const [ether, setEther] = useState("");
  const classes = useStyles();
  function onSubmit() {
    setShow(1);
    setFromUser(info[0].from);
    setToUser(info[0].to);
    setHash(info[0].hash);
    setEther(amount);
  }

  function refreshPage() {
    window.location.reload();
  }

  return (
    <Box>
      {show === 0 ? (
        <Box>
          <Grid
            className={classes.grid}
            container
            justifyContent="center"
            alignItems="center"
            spacing={0}
            direction="column"
          >
            <Grid item>
              <Paper
                className={classes.paper}
                variant="elevation"
                elevation={2}
              >
                <CardMedia
                  style={{ height: 50, padding: "37%" }}
                  image={Check}
                ></CardMedia>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <Typography component="h1" variant="h5">
                      Transaction Confirmed
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      color="GrayText"
                      variant="caption"
                      display="block"
                    >
                      Your transaction was confirmed successfully
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={onSubmit}
                      className={classes.buttonA}
                      variant="outlined"
                    >
                      VIEW TRANSACTION
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={refreshPage}
                      className={classes.buttonB}
                      variant="text"
                    >
                      CLOSE
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Grid
          container
          className={classes.grid}
          justifyContent="center"
          alignItems="center"
          spacing={0}
        >
          <Grid item>
            <Alert severity="info">
              <Grid container spacing={4} direction="column">
                <Grid item>
                  <Typography color="GrayText" display="block">
                    Transaction's Information:
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography display="block">
                    <Typography>From:</Typography> {fromUser}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography display="block">
                    <Typography>To:</Typography> {toUser}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography display="block">
                    <Typography>Hash:</Typography> {hash.toString()}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography display="block">
                    <Typography>Amount:</Typography> {ether}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    onClick={refreshPage}
                    variant="contained"
                    fullWidth
                    className={classes.buttonC}
                  >
                    BACK
                  </Button>
                </Grid>
              </Grid>
            </Alert>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
