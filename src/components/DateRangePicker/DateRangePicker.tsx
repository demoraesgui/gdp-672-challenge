import React, { useState, useEffect } from 'react';
import { DatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { CountryData } from '../../@types';

import { isSameDay } from 'date-fns';
import { getCountryDataByDate } from '../../api';
import { Grid, Typography } from '@material-ui/core';

const DateRangePicker: React.FC<{ selectedCountry: CountryData | null }> = ({ selectedCountry }) => {
  const [selectedInitialDate, setSelectedInitialDate] = useState<MaterialUiPickersDate>(new Date());
  const [selectedFinalDate, setSelectedFinalDate] = useState<MaterialUiPickersDate>(new Date());

  useEffect(() => {
    getCountryDataByDate(selectedCountry, selectedInitialDate, selectedFinalDate)?.then(console.log);
  }, [selectedCountry, selectedInitialDate, selectedFinalDate]);

  //@ts-ignore
  const isntSameDay = !isSameDay(selectedInitialDate, selectedFinalDate);

  return (
    <>
      <Grid item sm={isntSameDay ? 2 : 4} xs={12}>
        <Typography variant="h5">Select a date period:</Typography>
      </Grid>
      <Grid item sm={isntSameDay ? 2 : 4} xs={12}>
        <DatePicker
          label={`${isntSameDay ? 'Initial' : ''} Date`}
          value={selectedInitialDate}
          maxDate={new Date()}
          onChange={(date) => {
            setSelectedInitialDate(date);
            setSelectedFinalDate(new Date());
          }}
          animateYearScrolling
        />
      </Grid>
      {isntSameDay && (
        <Grid item sm={2} xs={12}>
          <DatePicker
            label="Final Date"
            //@ts-ignore
            minDate={selectedInitialDate}
            maxDate={new Date()}
            value={selectedFinalDate}
            onChange={(date) => setSelectedFinalDate(date)}
            animateYearScrolling
          />
        </Grid>
      )}
    </>
  );
};

export default DateRangePicker;
