import React, { Component } from "react";
import { CircularProgress, Grid, Paper, Typography } from "@mui/material";
import './styles.css'

export default function SendingTransaction() {
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
                <Grid className="circle-grid"  item>
              <CircularProgress style={{ color: "rgba(244,203,98,255)"}} size='120px' />
              </Grid>
              <Grid item>
                
                <Typography className="typography" component="h1" variant="h5">
                  Sending Transaction
                </Typography>
              </Grid>
              <Typography color="GrayText"variant="caption" display="block">
                  Please, wait until block confirmation
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
