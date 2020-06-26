import React, { useState, useEffect } from 'react';
import { getCountries } from '../../api';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { CountryType } from '../../@types';

const CountriesDropdown: React.FC = () => {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [selectedCountry, setSelectedCountry] = React.useState<CountryType | null>(null);
  useEffect(() => {
    getCountries().then((data) => setCountries(data));
  }, []);
  return (
    <Autocomplete
      value={selectedCountry}
      onChange={(event, newValue) => {
        setSelectedCountry(newValue);
      }}
      id="combo-box-countries"
      options={countries}
      getOptionLabel={(countrie) => countrie.Country}
      style={{ width: 300 }}
      clearOnEscape
      renderInput={(params) => <TextField {...params} label="Country" variant="standard" />}
    />
  );
};

export default CountriesDropdown;
