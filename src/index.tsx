import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import store from './store';
import { StoreProvider } from 'easy-peasy';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <CssBaseline />
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
