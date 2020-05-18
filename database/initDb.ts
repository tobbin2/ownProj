import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBq9ZyNFcoRx2kUk4k0nOMwDbz1UitRXkk",
    authDomain: "help-dista.firebaseapp.com",
    databaseURL: "https://help-dista.firebaseio.com",
    projectId: "help-dista",
    storageBucket: "help-dista.appspot.com",
    messagingSenderId: "523495794353",
    appId: "1:523495794353:web:7db4a76ba6024168522490",
    measurementId: "G-6H4VKXTR86"
  };
  


export function initDb () {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}