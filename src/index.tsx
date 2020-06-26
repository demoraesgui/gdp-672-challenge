import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import store from './store';
import { StoreProvider } from 'easy-peasy';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <CssBaseline />
        <App />
      </MuiPickersUtilsProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
