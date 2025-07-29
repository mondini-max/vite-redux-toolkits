import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store/store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);
