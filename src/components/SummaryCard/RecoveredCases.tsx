import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { RecoveredCasesProps } from '../../@types';

const RecoveredCases: React.FC<RecoveredCasesProps> = ({ newRecovered, totalRecovered }) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography variant="h6" component="h2" style={{ color: 'green' }}>
          Total Recovered
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2" style={{ color: 'green' }}>
          {totalRecovered}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" component="h2" style={{ color: 'green' }}>
          New Recovered
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2" style={{ color: 'green' }}>
          {newRecovered}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default RecoveredCases;
