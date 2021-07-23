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

// async thing as we are making an api request and tht is asynchronous thing
// when user signsout we get null from userauth
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
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
