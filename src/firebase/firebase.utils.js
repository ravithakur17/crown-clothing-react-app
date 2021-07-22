import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBbpzNFocjmjEhw86ZQHWgb44yapZGMlWM",
  authDomain: "crown-db-3622a.firebaseapp.com",
  projectId: "crown-db-3622a",
  storageBucket: "crown-db-3622a.appspot.com",
  messagingSenderId: "516919598307",
  appId: "1:516919598307:web:cd4d735773514af16779d6",
  measurementId: "G-16XLMCZ2QQ",
};

firebase.initializeApp(config);

// check these in docs of firebase
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setting up google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); //always want to trigger google pop up whwnever we use this googleAuthProvider

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
