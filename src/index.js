import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyACgrGmDYBkZZsXSU0zuhErw2o47TgcyAc",
  authDomain: "photo-sharing-app-e0569.firebaseapp.com",
  projectId: "photo-sharing-app-e0569",
  storageBucket: "photo-sharing-app-e0569.appspot.com",
  messagingSenderId: "829115528164",
  appId: "1:829115528164:web:f9d3e16b2450c2ff5ccdf1",
  measurementId: "G-R7PKPRVFJN"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig); // my solution

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();