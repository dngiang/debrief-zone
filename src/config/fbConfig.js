import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyArUGrHiusliOWV7_0J3oXb7053fsAKyTY",
  authDomain: "debrief-zone.firebaseapp.com",
  databaseURL: "https://debrief-zone.firebaseio.com",
  projectId: "debrief-zone",
  storageBucket: "debrief-zone.appspot.com",
  messagingSenderId: "303204094038"
};

firebase.initializeApp(config);

export default firebase;