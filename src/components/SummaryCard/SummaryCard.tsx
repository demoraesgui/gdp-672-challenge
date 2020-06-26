import React from 'react';
import { Card, CardContent, CardHeader, Grid, makeStyles } from '@material-ui/core';
import ConfirmedCases from './ConfirmedCases';
import DeathCases from './DeathCases';
import RecoveredCases from './RecoveredCases';
import { SummaryCardProps } from '../../@types';

const useStyles = makeStyles({
  root: {
    width: 600,
  },
});

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  totalConfirmed,
  totalDeaths,
  totalRecovered,
  newDeaths,
  newRecovered,
  newConfirmed,
}) => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader title={title}></CardHeader>
      <CardContent className={classes.root}>
        <Grid container justify="space-around" alignItems="center">
          <Grid item>
            <ConfirmedCases totalConfirmed={totalConfirmed} newConfirmed={newConfirmed} />
          </Grid>
          <Grid item>
            <DeathCases totalDeaths={totalDeaths} newDeaths={newDeaths} />
          </Grid>
          <Grid item>
            <RecoveredCases totalRecovered={totalRecovered} newRecovered={newRecovered} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
