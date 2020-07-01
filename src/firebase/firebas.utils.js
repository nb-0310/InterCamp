import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDQX5Z9_V463kSe3XQ8F5r6azFT8E5hlwM",
    authDomain: "intercamp-e2d5f.firebaseapp.com",
    databaseURL: "https://intercamp-e2d5f.firebaseio.com",
    projectId: "intercamp-e2d5f",
    storageBucket: "intercamp-e2d5f.appspot.com",
    messagingSenderId: "973020436526",
    appId: "1:973020436526:web:dc5e0f827bc88a2a7467bf",
    measurementId: "G-CRZG8FTKGW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// trigger the pop-up from google provider
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;