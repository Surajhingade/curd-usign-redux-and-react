import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
 import 'react-toastify/dist/ReactToastify.css';
 import {BrowserRouter} from 'react-router-dom';
import App from './App';
import { createStore } from 'redux';
import contactReducer from './redux/reducers/contactReducer';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'
 
// apply redux 
 
const store = createStore(contactReducer,composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>

    <App />
    </BrowserRouter>
  </Provider>
);

 