import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCdoesCw2Y1wTz1CfR2RzYWM806tDodALY',
  authDomain: 'cook-uni-c0938.firebaseapp.com',
  databaseURL: 'https://cook-uni-c0938-default-rtdb.firebaseio.com',
  projectId: 'cook-uni-c0938',
  storageBucket: 'cook-uni-c0938.appspot.com',
  messagingSenderId: '917398348811',
  appId: '1:917398348811:web:6b224d9686f70d15d3930e',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
