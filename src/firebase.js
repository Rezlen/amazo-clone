// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Instruction to use FireBase;  Choose/Create your project on FireBase > Project Setting > FireBase SDK snippet > Config then copy the snippet & paste it here:
// Link: https://console.firebase.google.com/u/0/project/amazo-clone1/settings/general/web:MTg4NWYyMTAtNjY3MS00YmU4LWExODItNWQzZDYwMTgxNTM3

// Go to the AUTHENTICATION > Sign-In-Method then ENABLE Email/Password
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhIDKI8bNlGaM8FTd2KgBbewMEzhgl6u0",
  authDomain: "amazo-clone1.firebaseapp.com",
  projectId: "amazo-clone1",
  storageBucket: "amazo-clone1.appspot.com",
  messagingSenderId: "706401718927",
  appId: "1:706401718927:web:d7410a4d107835621ed6fa",
  measurementId: "G-BYV91BM3P8"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };