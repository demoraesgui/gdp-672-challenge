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
  TotalConfirmed,
  TotalDeaths,
  TotalRecovered,
  NewDeaths,
  NewRecovered,
  NewConfirmed,
}) => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader title={title}></CardHeader>
      <CardContent className={classes.root}>
        <Grid container justify="space-around" alignItems="center">
          <Grid item>
            <ConfirmedCases TotalConfirmed={TotalConfirmed} NewConfirmed={NewConfirmed} />
          </Grid>
          <Grid item>
            <DeathCases TotalDeaths={TotalDeaths} NewDeaths={NewDeaths} />
          </Grid>
          <Grid item>
            <RecoveredCases TotalRecovered={TotalRecovered} NewRecovered={NewRecovered} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
