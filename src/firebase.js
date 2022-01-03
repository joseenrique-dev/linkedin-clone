import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDxxNiEfXTmPXxgOpWxhhehMtmg-4lYMTM',
  authDomain: 'linkedin-clone-yt-83f20.firebaseapp.com',
  projectId: 'linkedin-clone-yt-83f20',
  storageBucket: 'linkedin-clone-yt-83f20.appspot.com',
  messagingSenderId: '1086641598832',
  appId: '1:1086641598832:web:09c6bbb238216f41d2dfb5',
  measurementId: 'G-D2SZT7JPDJ',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
// const db = firebaseApp.firestore();
const auth = getAuth();
// const provider = new firebase.auth.GoogleAuthProvider();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
