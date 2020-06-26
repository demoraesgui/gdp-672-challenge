import React, { useState, useEffect } from 'react';
import { DatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { CountryData } from '../../@types';

import { addDays, isToday } from 'date-fns';
import { getCountryDataByDate } from '../../api';

const DateRangePicker: React.FC<{ selectedCountry: CountryData | null }> = ({ selectedCountry }) => {
  const [selectedInitialDate, setSelectedInitialDate] = useState<MaterialUiPickersDate>(new Date());
  const [selectedFinalDate, setSelectedFinalDate] = useState<MaterialUiPickersDate>();

  useEffect(() => {
    getCountryDataByDate(selectedCountry, selectedInitialDate, selectedFinalDate)?.then(console.log);
  }, [selectedCountry, selectedInitialDate, selectedFinalDate]);

  return (
    <>
      <DatePicker
        label="Initial Date"
        value={selectedInitialDate}
        maxDate={new Date()}
        onChange={(date) => setSelectedInitialDate(date)}
        animateYearScrolling
      />
      {
        //@ts-ignore
        !isToday(selectedInitialDate) && (
          <DatePicker
            label="Final Date"
            //@ts-ignore
            minDate={addDays(selectedInitialDate, 1)}
            maxDate={new Date()}
            value={selectedFinalDate}
            onChange={(date) => setSelectedFinalDate(date)}
            animateYearScrolling
          />
        )
      }
    </>
  );
};

export default DateRangePicker;
