import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { ConfirmedCasesProps } from '../../@types';

const ConfirmedCases: React.FC<ConfirmedCasesProps> = ({
  totalConfirmed,
  newConfirmed,
}) => {
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h6" component="h2" color="primary">
            Total Confirmed
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="primary">
            {totalConfirmed}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" component="h2" color="primary">
            New Confirmed
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="primary">
            {newConfirmed}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ConfirmedCases;
