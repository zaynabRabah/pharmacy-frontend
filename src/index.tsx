import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {Provider} from 'react-redux';
import axios from 'axios';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './configureStore'


axios.defaults.baseURL = 'http://localhost:5000/';
// axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('authAccessToken');
// axios.defaults.headers.common['Accept'] = 'application/json';

axios.interceptors.request.use( request => {
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
})

axios.interceptors.response.use( response => {
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
})

const store = configureStore()

const history = createBrowserHistory();

const renderApp = () =>
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
  )

if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
  (module as any).hot.accept('./App', renderApp)
}

renderApp()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


