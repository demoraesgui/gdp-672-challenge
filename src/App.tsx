import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const App = () => {
  const [data, setData] = useState();
  useEffect(() => {
    Axios.get(`https://api.covid19api.com/summary`).then((res) =>
      setData(res.data.Global),
    );
  });

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default App;
