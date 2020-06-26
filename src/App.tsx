import React, { useEffect } from 'react';
import { AppLayout } from './layouts';
import { CountriesDropdown, SummaryCard } from './components';
import { Grid, Typography } from '@material-ui/core';
import { getSummaryData } from './api';
import { useStoreActions, useStoreState } from './store';
import { CountryData } from './@types';
import DateRangePicker from './components/DateRangePicker';

const App = () => {
  const [selectedCountry, setSelectedCountry] = React.useState<CountryData | null>(null);
  const setSummaryData = useStoreActions((actions) => actions.covid.setSummaryData);
  const globalData = useStoreState((state) => state.covid.summaryData.Global);

  useEffect(() => {
    getSummaryData().then((data) => setSummaryData(data));
  }, [setSummaryData]);

  return (
    <AppLayout>
      <Grid container direction="row" justify="space-evenly" alignItems="center">
        <Grid item>
          <Typography variant="h5">Select a country to retrieve data from:</Typography>
        </Grid>
        <Grid item>
          <CountriesDropdown selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
        </Grid>
      </Grid>
      <Grid container justify="space-evenly" alignItems="center">
        <Grid item>
          <SummaryCard
            title={`${selectedCountry?.Country ?? 'Global'} cases today`}
            TotalConfirmed={selectedCountry?.TotalConfirmed ?? globalData?.TotalConfirmed}
            TotalDeaths={selectedCountry?.TotalDeaths ?? globalData?.TotalDeaths}
            TotalRecovered={selectedCountry?.TotalRecovered ?? globalData?.TotalRecovered}
            NewDeaths={selectedCountry?.NewDeaths ?? globalData?.NewDeaths}
            NewConfirmed={selectedCountry?.NewConfirmed ?? globalData?.NewConfirmed}
            NewRecovered={selectedCountry?.NewRecovered ?? globalData?.NewRecovered}
          ></SummaryCard>
        </Grid>
        {selectedCountry && (
          <Grid container direction="row" justify="space-evenly" alignItems="center" style={{ textAlign: 'center' }}>
            {/* inside DateRangePicker has Grid items */}
            <DateRangePicker selectedCountry={selectedCountry} />
          </Grid>
        )}
      </Grid>
    </AppLayout>
  );
};

export default App;
