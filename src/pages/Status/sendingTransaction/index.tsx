import React, { Component, useState } from "react";
import { Box, CircularProgress, Grid, Paper, Typography } from "@mui/material";

import TransactionAccepted from "../transactionAccepted";
import TransactionFailed from "../transactionFailed";
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

export default function SendingTransaction({ er, amount, info }: any) {
  console.log(er);
  const classes = useStyles();
  return (
    <div>
      {er.length === 0 ? (
        info.length === 0 ? (
          <Box>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={0}
              className={classes.grid}
            >
              <Paper
                className={classes.paper}
                variant="elevation"
                elevation={2}
              >
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <CircularProgress
                      style={{ color: "rgba(244,203,98,255)" }}
                      size="120px"
                    />
                  </Grid>
                  <Grid item>
                    <Typography component="h1" variant="h5">
                      Sending Transaction
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      color="GrayText"
                      variant="caption"
                      display="block"
                    >
                      Please, wait until block confirmation
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Box>
        ) : (
          <TransactionAccepted amount={amount} info={info} />
        )
      ) : (
        <TransactionFailed error={er} />
      )}
    </div>
  );
}
