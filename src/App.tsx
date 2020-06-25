import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { AppLayout } from './layouts';

const App = () => {
  const [data, setData] = useState();
  useEffect(() => {
    Axios.get(`https://api.covid19api.com/summary`).then((res) =>
      setData(res.data.Global),
    );
  });

  return (
    <AppLayout>
      <pre>{JSON.stringify(data, null, 2)}</pre>;
    </AppLayout>
  );
};

export default App;
