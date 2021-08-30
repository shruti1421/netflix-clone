import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5-RcqiDlshicLaTvIwaiGkuUXTQ1zJkw",
    authDomain: "netflix-clone-257ac.firebaseapp.com",
    projectId: "netflix-clone-257ac",
    storageBucket: "netflix-clone-257ac.appspot.com",
    messagingSenderId: "26600747760",
    appId: "1:26600747760:web:eb6f74baa0c2ba14e04835",
    measurementId: "G-CXMZRPQJ6G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;