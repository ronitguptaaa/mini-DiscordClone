// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAZBErMhYNodZnXbufXdk3duoqi6Qt_KMo",
  authDomain: "discord-clone-1bf75.firebaseapp.com",
  projectId: "discord-clone-1bf75",
  storageBucket: "discord-clone-1bf75.appspot.com",
  messagingSenderId: "518338070552",
  appId: "1:518338070552:web:4daa051776b7505eeb9b6d",
  measurementId: "G-E4T1C4Y55Y"
};

const firebaseApp = firebase.initalizeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;