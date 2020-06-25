import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

interface AppLayoutProps {}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">
            Coronavirus(COVID-19) Tracker
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <main>{children}</main>
    </>
  );
};

export default AppLayout;
