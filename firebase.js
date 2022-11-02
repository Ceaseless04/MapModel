// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcjNrNrDamH1BaZ6BtgvWY3ENNx5QXoM4",
  authDomain: "mapme-66db2.firebaseapp.com",
  projectId: "mapme-66db2",
  storageBucket: "mapme-66db2.appspot.com",
  messagingSenderId: "272557516746",
  appId: "1:272557516746:web:a9574d74753be2c4ecd133",
  measurementId: "G-QP4EDCX1J1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);