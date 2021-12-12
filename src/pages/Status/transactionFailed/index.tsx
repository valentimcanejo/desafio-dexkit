import { Button, CardMedia, CircularProgress, Grid, Paper, Typography } from '@mui/material';
import React, { Component } from 'react';
import './style.css'
import Circle from '../../../assets/circle.png'

export default function TransactionFailed(){

    return(
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
              <CardMedia style={{height: 100, padding: '30%'}} image={Circle}></CardMedia>
              </Grid>
              <Grid item>
                
                <Typography className="typography" component="h1" variant="h5">
                  Transaction Failed
                </Typography>
              </Grid>
              <Typography color="GrayText"variant="caption" display="block">
                  Your transaction failed, please try again later.
              </Typography>
              <Grid className="tryAgain" item>
                  <Button className="tryAgain-button" variant="outlined">TRY AGAIN</Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
    )

}