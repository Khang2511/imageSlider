import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBmGBJ5-rDIDvqrH89GO84G1oe8jCLtFdI",
  authDomain: "imgeslider.firebaseapp.com",
  projectId: "imgeslider",
  storageBucket: "imgeslider.appspot.com",
  messagingSenderId: "581652368527",
  appId: "1:581652368527:web:4f7e64547109bb716834fa",
  measurementId: "G-5N8286MCTT"
};

firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timeStamp};