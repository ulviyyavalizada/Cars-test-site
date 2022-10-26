import React from 'react';
import ReactDOM from 'react-dom/client';
import configureStore from './redux/reducers/configStore'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
// Import Css files
import './assets/css/index.sass';
import './assets/css/default.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const store = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
