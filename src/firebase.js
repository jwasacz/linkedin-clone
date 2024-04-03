import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDREzri_NEcE3kWe19TWXXlXuib3N0c600",
  authDomain: "linkedin-clone-17e7f.firebaseapp.com",
  projectId: "linkedin-clone-17e7f",
  storageBucket: "linkedin-clone-17e7f.appspot.com",
  messagingSenderId: "645645890102",
  appId: "1:645645890102:web:aa39d506641411dde29e97",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export{db, auth};
