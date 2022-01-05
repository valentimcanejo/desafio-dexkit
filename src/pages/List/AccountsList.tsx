import { Box, Grid, Typography, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import Account from "../Wallet/index";

interface Account {
  id: number;
  address: string;
  balance: string;
}
interface Props {
  accounts: Account[];
}

const AccountsList: React.FC<Props> = ({ accounts }) => {
  const [addresses, setAddresses] = useState([accounts]);

  useEffect(() => {
    setAddresses((addresses) => [...addresses, accounts]);
  }, []);

  return (
    <Box>
      <Grid container spacing={0}>
        <Paper>
          <Typography>
            {addresses.map((address) => {
              <Typography variant="body1">{address}</Typography>;
            })}
            CXDDSFGSSG
          </Typography>
        </Paper>
      </Grid>
    </Box>
  );
};

export default AccountsList;
