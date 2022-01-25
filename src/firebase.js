import firebase from "firebase/app";
import "firebase/firestore";
let  config = {
  apiKey: "xxx",
  authDomain: "react-firebase-crud-eedc4.firebaseapp.com",
  projectId: "react-firebase-crud-eedc4",
  storageBucket: "react-firebase-crud-eedc4.appspot.com",
  messagingSenderId: "699098597040",
  appId: "1:699098597040:web:ba8794b731386ea1e2dd75",
  measurementId: "xxx"
};

firebase.initializeApp(config);

export default firebase.firestore();
