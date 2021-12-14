import React, { Component, useState } from "react";
import { CircularProgress, Grid, Paper, Typography } from "@mui/material";
import "./styles.css";
import TransactionAccepted from "../transactionAccepted";
import TransactionFailed from "../transactionFailed";

export default function SendingTransaction({ er, amount, info }: any) {
  console.log(er);

  return (
    <div>
      {er.length === 0 ? (
        info.length === 0 ? (
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
                      <CircularProgress
                        style={{ color: "rgba(244,203,98,255)" }}
                        size="120px"
                      />
                    </Grid>
                    <Grid item>
                      <Typography
                        className="typography"
                        component="h1"
                        variant="h5"
                      >
                        Sending Transaction
                      </Typography>
                    </Grid>
                    <Typography
                      color="GrayText"
                      variant="caption"
                      display="block"
                    >
                      Please, wait until block confirmation
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </div>
        ) : (
          <TransactionAccepted amount={amount} info={info} />
        )
      ) : (
        <TransactionFailed error={er} />
      )}
    </div>
  );
}
