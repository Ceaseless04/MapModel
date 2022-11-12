
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
export const key = "AIzaSyDcjNrNrDamH1BaZ6BtgvWY3ENNx5QXoM4"
export const firebaseConfig = {
    apiKey: key,
    authDomain: "mapme-66db2.firebaseapp.com",
    projectId: "mapme-66db2",
    storageBucket: "mapme-66db2.appspot.com",
    messagingSenderId: "272557516746",
    appId: "1:272557516746:web:a9574d74753be2c4ecd133",
    measurementId: "G-QP4EDCX1J1"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };