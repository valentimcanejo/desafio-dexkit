import { Button, CardMedia, CircularProgress, Grid, Paper, Typography } from '@mui/material';
import React, { Component } from 'react';
import './style.css'
import Check from '../../../assets/check.png'

export default function TransactionAccepted(){

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
              <CardMedia style={{height: 100, padding: '30%'}} image={Check}></CardMedia>
              </Grid>
              <Grid item>
                
                <Typography className="typography" component="h1" variant="h5">
                  Transaction Confirmed
                </Typography>
              </Grid>
              <Typography color="GrayText"variant="caption" display="block">
                  Your transaction was confirmed successfully
              </Typography>
              <Grid className="tryAgain" item>
                  <Button className="tryAgain-button" variant="outlined">VIEW TRANSACTION</Button>
              
                  <Button className="close-buttom" variant="text">CLOSE</Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
    )

}