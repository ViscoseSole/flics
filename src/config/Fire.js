import firebase from 'firebase';
import { Firebase_API } from '../keys.js';

const config = {
  apiKey: Firebase_API,
  authDomain: "flics-2db00.firebaseapp.com",
  databaseURL: "https://flics-2db00.firebaseio.com",
  projectId: "flics-2db00",
  storageBucket: "flics-2db00.appspot.com",
  messagingSenderId: "103934190789"
};

const fire = firebase.initializeApp(config);
export default fire;
