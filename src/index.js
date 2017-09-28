import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as Firebase from "firebase";
import * as ENV from "./env";


Firebase.initializeApp({
  apiKey: ENV.firebase.apiKey,
  authDomain: ENV.firebase.authDomain,
  databaseURL: ENV.firebase.databaseURL,
  projectId: ENV.firebase.projectId,
  storageBucket: ENV.firebase.storageBucket,
  messagingSenderId: ENV.firebase.messagingSenderId
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
