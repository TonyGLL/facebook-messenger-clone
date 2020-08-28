import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDz32065in_bDbc86sZxYdyx67QGMIaW0U',
  authDomain: 'react-messenger-clone-38fde.firebaseapp.com',
  databaseURL: 'https://react-messenger-clone-38fde.firebaseio.com',
  projectId: 'react-messenger-clone-38fde',
  storageBucket: 'react-messenger-clone-38fde.appspot.com',
  messagingSenderId: '701087579916',
  appId: '1:701087579916:web:8eeb3cac532a2e7ce29329',
  measurementId: 'G-3F4SB2K29R'
});

const db = firebaseApp.firestore();

export { db };