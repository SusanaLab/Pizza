import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAWj7wXC2Sy1WFAMNcZHIqVMID2E40mMqI",
  authDomain: "pizza-51f84.firebaseapp.com",
  projectId: "pizza-51f84",
  storageBucket: "pizza-51f84.appspot.com",
  messagingSenderId: "950345847421",
  appId: "1:950345847421:web:db50bba349338e5d971714",
  measurementId: "G-RLJ1F05NKR"
};

const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { fire, db };
