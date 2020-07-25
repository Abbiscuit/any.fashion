import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB-1lXzwTy1CHnywcAM-3b7CnR1uIwmcPw',
  authDomain: 'any-ec.firebaseapp.com',
  databaseURL: 'https://any-ec.firebaseio.com',
  projectId: 'any-ec',
  storageBucket: 'any-ec.appspot.com',
  messagingSenderId: '408757686700',
  appId: '1:408757686700:web:13a82501c45768e55c2a09',
  measurementId: 'G-394F31JKJJ',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();

// Firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // if userAuth doesnt exist

  // if exists
  const userRef = db.doc(`users/${userAuth.uid}`);

  // snapshot
  const snapShot = await userRef.get();

  // if snapshot not get
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // Create
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export default firebase;
