// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import firebase from 'firebase';
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBuemO3lDOOPgDCKFddIu6pvH6cFdSWhuo",
  authDomain: "getmega-gaming.firebaseapp.com",
  databaseURL:"https://getmega-gaming.firebaseio.com",
  projectId: "getmega-gaming",
  storageBucket: "getmega-gaming.appspot.com",
  messagingSenderId: "787640674448",
  appId: "1:787640674448:web:25cbffb4a0d9bae33fd015",
  measurementId: "G-W89B14YB6H"
};

  
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();


const auth = firebase.auth();
const provider = new  firebase.auth.GoogleAuthProvider();
export {auth,provider}

export default db;
