import Rebase from 're-base'
import firebase from 'firebase'


//configure app 

var firebaseConfig = {
    apiKey: "AIzaSyDbjsV7_b31y5lSYEjQIhkC3DxEM718qSs",
    authDomain: "catch-of-the-day-silja.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-silja-default-rtdb.firebaseio.com",
    projectId: "catch-of-the-day-silja",
    storageBucket: "catch-of-the-day-silja.appspot.com",
    messagingSenderId: "656573816967",
    appId: "1:656573816967:web:43c16f57f96441ba8c9822",
    measurementId: "G-0Q36HQJE2L"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
firebase.analytics();

const base = Rebase.createClass(firebaseApp.database())

//named export
export {
    firebaseApp
}

//default export
export default base;