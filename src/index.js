import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

// Create a root.
const container = document.getElementById('root');
const root = createRoot(container); // Create a root using createRoot

// Initial render: Render your app inside the root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);