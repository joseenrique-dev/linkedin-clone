import firebase from 'firebase';

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

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
