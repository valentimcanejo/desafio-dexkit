import {
  Alert,
  Box,
  Button,
  CardMedia,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { Component, useState } from "react";

import Circle from "../../../assets/circle.png";
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
    marginTop: "10px",
    color: "rgba(244,203,98,255)",
    borderColor: "rgba(244,203,98,255)",
  },
  grid: {
    minHeight: "90vh",
  },
  openButton: {
    alignItems: "right",
  },
}));
export default function TransactionFailed({ error }: any) {
  const [err, setErr] = useState(error);
  const classes = useStyles();
  function refreshPage() {
    window.location.reload();
  }

  return (
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
          <Alert severity="error">{err.message}</Alert>
        </Grid>
        <Grid item>
          <Paper className={classes.paper} variant="elevation" elevation={2}>
            <CardMedia
              style={{ height: 60, padding: "33%" }}
              image={Circle}
            ></CardMedia>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography className="typography" component="h1" variant="h5">
                  Transaction Failed
                </Typography>
              </Grid>
              <Grid item>
                <Typography color="GrayText" variant="caption" display="block">
                  Your transaction failed, please try again later.
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  onClick={refreshPage}
                  fullWidth
                  className={classes.button}
                  variant="outlined"
                >
                  TRY AGAIN
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
