import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyB9YA9Fs6PKnKwV5kneupQI4fSfb30jo0o",
    authDomain: "crwn-db-ceb94.firebaseapp.com",
    projectId: "crwn-db-ceb94",
    storageBucket: "crwn-db-ceb94.appspot.com",
    messagingSenderId: "620403556711",
    appId: "1:620403556711:web:295db90314dc045846afc2",
    measurementId: "G-WC3MXD1SPX"
  };

  export const createUserProfileDocument = async(userAuth,additionalData) => {
      if(!userAuth) return;
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();
      if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
    
    try{
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        });
    }catch(error){
        console.log('error creating user',error.message);
    }
}
    return userRef;

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
 

  export default firebase;