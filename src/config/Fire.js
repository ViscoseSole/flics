import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCyPEddhMi-3bAQqKsI5oJ-9-7OU_yGzj0",
  authDomain: "flics-2db00.firebaseapp.com",
  databaseURL: "https://flics-2db00.firebaseio.com",
  projectId: "flics-2db00",
  storageBucket: "flics-2db00.appspot.com",
  messagingSenderId: "103934190789"
};

const fire = firebase.initializeApp(config);
export default fire;
