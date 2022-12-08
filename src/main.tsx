import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { GlobalStyles } from './app-styles/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from './services/store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>
);
