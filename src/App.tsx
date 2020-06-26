import React, { useEffect } from 'react';
import { AppLayout } from './layouts';
import { CountriesDropdown, SummaryCard, CountryDataTable } from './components';
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
      <Grid container direction="row" justify="center" alignItems="center" spacing={4} style={{ marginBottom: 16 }}>
        <Grid item>
          <Typography variant="h5">Select a country to retrieve data from:</Typography>
        </Grid>
        <Grid item>
          <CountriesDropdown selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="center" spacing={4} style={{ marginBottom: 16 }}>
        <Grid item>
          <SummaryCard
            title={`${selectedCountry?.Country ?? 'Global'} cases today`}
            selectedCountry={selectedCountry ?? globalData ?? {}}
          ></SummaryCard>
        </Grid>
        {selectedCountry && (
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={4}
            style={{ textAlign: 'center', marginBottom: 16 }}
          >
            {/* inside DateRangePicker has Grid items */}
            <DateRangePicker selectedCountry={selectedCountry} />
            <Grid item xs={12} style={{ marginBottom: 16 }}>
              <CountryDataTable></CountryDataTable>
            </Grid>
          </Grid>
        )}
      </Grid>
    </AppLayout>
  );
};

export default App;
