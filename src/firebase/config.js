import  firebase from 'firebase/app';
import 'firebase/storage';
import "firebase/firestore";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDYxPjGi4ppHxKLjpprCpf8OryzoPRtzGM",
    authDomain: "firegram-f99e3.firebaseapp.com",
    projectId: "firegram-f99e3",
    storageBucket: "firegram-f99e3.appspot.com",
    messagingSenderId: "751362288318",
    appId: "1:751362288318:web:210cdc4c86479e7c394cef"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export {projectFirestore, projectStorage, timestamp};