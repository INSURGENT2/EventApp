import React from 'react';
import ReactDOM from 'react-dom/client'; // Use createRoot from react-dom/client in React 18
import './index.css'; // Import your CSS file
import App from './App.jsx'; // Import the main App component

// Create a root element and use createRoot to render your app
const rootElement = document.getElementById('root'); // Get the root element from the HTML
const root = ReactDOM.createRoot(rootElement); // Create a root using createRoot

root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
);

