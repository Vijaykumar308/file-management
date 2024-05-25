import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store.js';
import AppProvider from './context/AppContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
    <AppProvider>
      <Provider store={store}>
        <App />
      </Provider>
      </AppProvider>
    </BrowserRouter>
  // </React.StrictMode>,
)
