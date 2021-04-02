import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBCBBVESpThGylWUgFiYoLTEZsmiQNa9JI',
  authDomain: 'exam-softuni-7b0c1.firebaseapp.com',
  databaseURL: 'https://exam-softuni-7b0c1-default-rtdb.firebaseio.com',
  projectId: 'exam-softuni-7b0c1',
  storageBucket: 'exam-softuni-7b0c1.appspot.com',
  messagingSenderId: '366356048515',
  appId: '1:366356048515:web:4e8b9e955e32e5448bc9b6',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
