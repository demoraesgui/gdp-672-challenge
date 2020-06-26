import React from 'react';
import { Card, CardContent, CardHeader, Grid, makeStyles, Theme, createStyles } from '@material-ui/core';
import ConfirmedCases from './ConfirmedCases';
import DeathCases from './DeathCases';
import RecoveredCases from './RecoveredCases';
import { SummaryCardProps } from '../../@types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 800,
      width: 'auto',
      [theme.breakpoints.up('sm')]: {
        width: 600,
        flexShrink: 0,
      },
    },
  }),
);

const SummaryCard: React.FC<SummaryCardProps> = ({ title, selectedCountry }) => {
  const classes = useStyles();
  const { TotalConfirmed, TotalDeaths, TotalRecovered } = selectedCountry;

  return (
    <Card>
      <CardHeader title={title} style={{ textAlign: 'center' }}></CardHeader>
      <CardContent className={classes.root}>
        <Grid container justify="space-around" alignItems="center">
          <Grid item sm={4} xs={12}>
            <ConfirmedCases TotalConfirmed={TotalConfirmed} />
          </Grid>
          <Grid item sm={4} xs={12}>
            <DeathCases TotalDeaths={TotalDeaths} />
          </Grid>
          <Grid item sm={4} xs={12}>
            <RecoveredCases TotalRecovered={TotalRecovered} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
