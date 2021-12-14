import {
  Alert,
  Button,
  CardMedia,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { Component, useState } from "react";
import "./style.css";
import Circle from "../../../assets/circle.png";

export default function TransactionFailed({ error }: any) {
  const [err, setErr] = useState(error);

  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className="sending">
      <Grid container spacing={0} direction="row">
        <Grid item>
          <Grid container direction="row" spacing={2} className="wallet-form">
            <Alert severity="error">{err.message}</Alert>
            <Paper
              variant="elevation"
              elevation={2}
              className="wallet-background"
            >
              <Grid className="circle-grid" item>
                <CardMedia
                  style={{ height: 60, padding: "33%" }}
                  image={Circle}
                ></CardMedia>
              </Grid>
              <Grid item>
                <Typography className="typography" component="h1" variant="h5">
                  Transaction Failed
                </Typography>
              </Grid>
              <Typography color="GrayText" variant="caption" display="block">
                Your transaction failed, please try again later.
              </Typography>
              <Grid className="tryAgain" item>
                <Button
                  onClick={refreshPage}
                  className="tryAgain-button"
                  style={{
                    marginTop: "10px",
                    color: "rgba(244,203,98,255)",
                    borderColor: "rgba(244,203,98,255)",
                  }}
                  variant="outlined"
                >
                  TRY AGAIN
                </Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
