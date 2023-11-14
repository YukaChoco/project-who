// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCXmYcZaKGhoVVbPWRmR0QvebNgdLHbJz0',
  authDomain: 'who-797e5.firebaseapp.com',
  projectId: 'who-797e5',
  storageBucket: 'who-797e5.appspot.com',
  messagingSenderId: '792930996511',
  appId: '1:792930996511:web:1213c25af7f44a0a32a02a',
  measurementId: 'G-TJEEGY3EE4',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
