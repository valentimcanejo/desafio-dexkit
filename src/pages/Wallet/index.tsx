import React, { useState } from "react";
import {
  
  Button,
 
  
  Paper,
  
  Typography,
} from "@mui/material";
import "./styles.css";
import {
  
  TextField
} from "@mui/material";
import { Grid } from "@mui/material";



export default function Wallet() {
  const [paste, setPaste] = useState("");

  const [max, setMax] = useState<any | null>(null);

  async function getPaste() {
    const text = await navigator.clipboard.readText();
    console.log(text);
    setPaste(text);
  }

  const onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValueAmount = e.target.value;
   
      setMax(newValueAmount);
    
  };

  const onChangeToken = (e: React.ChangeEvent<HTMLInputElement>) =>{
      const newValueToken = e.target.value;
      setPaste(newValueToken)
  }

  function getMax() {
    setMax(99999);
  }

  return (
    <div className="wallet">
      <Grid container spacing={0} direction="row">
        <Grid item>
          <Grid container direction="column" spacing={2} className="login-form">
            <Paper
              variant="elevation"
              elevation={2}
              className="login-background"
            >
              <Grid item>
                <Typography
                  className="typography"
                  variant="caption"
                  display="block"
                >
                  0x0000000000000
                </Typography>
                <Typography className="typography" component="h1" variant="h5">
                  1.5 ETH
                </Typography>
              </Grid>
              <Grid item>
                <form>
                  <Typography variant="caption" display="block">
                    Amount
                  </Typography>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <TextField
                        value={max}
                        className="textField"
                        placeholder="Amount"
                        fullWidth
                        name="username"
                        variant="outlined"
                        required
                        autoFocus
                        onChange={onChangeAmount}
                        InputProps={{
                          endAdornment: (
                            <Button
                              onClick={getMax}
                              style={{
                                fontWeight: "bold",
                                color: "rgba(230,198,139,255)",
                              }}
                            >
                              MAX
                            </Button>
                          ),
                        }}
                      />
                    </Grid>

                    <Grid item>
                      <Typography variant="caption" display="block">
                        Address
                      </Typography>
                      <TextField
                      onChange={onChangeToken}
                        value={paste}
                        className="textField"
                        placeholder="Address"
                        fullWidth
                        name="password"
                        variant="outlined"
                        required
                        InputProps={{
                          endAdornment: (
                            <Button
                              onClick={getPaste}
                              style={{
                                fontWeight: "bold",
                                color: "rgba(230,198,139,255)",
                              }}
                            >
                              PASTE
                            </Button>
                          ),
                        }}
                      ></TextField>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className="button-block"
                        style={{
                          fontWeight: "bold",
                          color: "black",
                          backgroundColor: "rgba(244,203,98,255)",
                        }}
                      >
                        SEND
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
    // <div className="wallet">

    //     <FormControl className="formControl">
    //     <Grid direction="row" container spacing={0} >
    //     <Grid item>
    //     <Grid
    //     container
    //     direction="column"

    //     spacing={2}

    //     >
    //     <TextField className="textField" variant="filled" />
    //     </Grid>

    //     <Grid item>
    //     <TextField variant="filled" />
    //     </Grid>

    //     <Grid item >
    //     <Button className="customButton" variant="contained">SEND</Button>
    //     </Grid>
    //     </Grid>
    //     </Grid>
    //     </FormControl>

    // </div>
  );
}
