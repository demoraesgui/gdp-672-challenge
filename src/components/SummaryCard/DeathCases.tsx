import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { DeathCasesProps } from '../../@types';

const DeathCases: React.FC<DeathCasesProps> = ({
  totalDeaths,
  newDeaths,
}) => {
  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h6" component="h2" color="error">
            Total Deaths
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="error">
            {totalDeaths}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" component="h2" color="error">
            New Deaths
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="error">
            {newDeaths}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default DeathCases;
