import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Routes } from 'react-router-dom';
import { UserContextProvider } from "./context/userContext";


ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <Routes>
        <App />
      </Routes>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
