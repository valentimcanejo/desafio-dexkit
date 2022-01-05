import {
  Alert,
  Button,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./style.css";
import Check from "../../../assets/check.png";

export default function TransactionAccepted({ amount, info }: any) {
  const [fromUser, setFromUser] = useState("");
  const [toUser, setToUser] = useState("");
  const [show, setShow] = useState(0);
  const [hash, setHash] = useState("");
  const [ether, setEther] = useState("");

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
    <div>
      {show === 0 ? (
        <div className="sending">
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
                  <Grid className="circle-grid" item>
                    <CardMedia
                      style={{ height: 50, padding: "37%" }}
                      image={Check}
                    ></CardMedia>
                  </Grid>
                  <Grid item>
                    <Typography
                      className="typography"
                      component="h1"
                      variant="h5"
                    >
                      Transaction Confirmed
                    </Typography>
                  </Grid>
                  <Typography
                    color="GrayText"
                    variant="caption"
                    display="block"
                  >
                    Your transaction was confirmed successfully
                  </Typography>
                  <Grid className="tryAgain" item>
                    <Button
                      onClick={onSubmit}
                      style={{
                        marginTop: "10px",
                        color: "rgba(244,203,98,255)",
                        borderColor: "rgba(244,203,98,255)",
                      }}
                      className="tryAgain-button"
                      variant="outlined"
                    >
                      VIEW TRANSACTION
                    </Button>

                    <Button
                      onClick={refreshPage}
                      style={{ color: "rgba(192,192,192,255)" }}
                      className="close-buttom"
                      variant="text"
                    >
                      CLOSE
                    </Button>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>
      ) : (
        <Alert className="alert" severity="info">
          <Typography color="GrayText" display="block">
            Transaction's Information:
          </Typography>
          <b>From:</b> <Typography display="block">{fromUser}</Typography>
          <b>To:</b> <Typography display="block">{toUser}</Typography>
          <b>Hash:</b>{" "}
          <Typography display="block">{hash.toString()}</Typography>
          <b>Amount:</b> <Typography display="block">{ether}</Typography>
          <Button
            onClick={refreshPage}
            className="tryAgain-button"
            variant="contained"
            style={{
              marginTop: "10px",
              color: "black",
              backgroundColor: "rgba(244,203,98,255)",
            }}
          >
            BACK
          </Button>
        </Alert>
      )}
    </div>
  );
}
