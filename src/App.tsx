import React from 'react';
import { AppLayout } from './layouts';
import { CountriesDropdown, SummaryCard } from './components';
import { Grid, Typography } from '@material-ui/core';

const App = () => {
  return (
    <AppLayout>
      <Grid container direction="row" justify="space-evenly" alignItems="center">
        <Grid item>
          <Typography variant="h5">Select a country to retrieve data from:</Typography>
        </Grid>
        <Grid item>
          <CountriesDropdown />
        </Grid>
      </Grid>
      <Grid container justify="space-evenly" alignItems="center">
        <Grid item>
          <SummaryCard
            title="Global cases"
            totalConfirmed={1000}
            totalDeaths={500}
            totalRecovered={300}
            newConfirmed={100}
            newDeaths={50}
            newRecovered={10}
          ></SummaryCard>
        </Grid>
      </Grid>
    </AppLayout>
  );
};

export default App;
