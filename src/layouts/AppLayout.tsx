import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';

interface AppLayoutProps {}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Coronavirus(COVID-19) outbreak tracker</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Toolbar />

      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          {children}
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </>
  );
};

export default AppLayout;
