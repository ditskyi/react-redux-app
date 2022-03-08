import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBYC7oqaZMvzqBgQcwTjMg3pwo9vbHO1UI",
  authDomain: "react-redux-app-48a3d.firebaseapp.com",
  projectId: "react-redux-app-48a3d",
  storageBucket: "react-redux-app-48a3d.appspot.com",
  messagingSenderId: "776170648706",
  appId: "1:776170648706:web:1b00b0eb4fbe5d0ec1b09b",
  databaseURL: "https://react-redux-app-48a3d-default-rtdb.europe-west1.firebasedatabase.app"
  });

export const auth = firebase.auth();
export const database = firebase.database();