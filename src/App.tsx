import React from 'react';
import { AppLayout } from './layouts';
import { CountriesDropdown } from './components';

const App = () => {
  return (
    <AppLayout>
      <CountriesDropdown />
    </AppLayout>
  );
};

export default App;
