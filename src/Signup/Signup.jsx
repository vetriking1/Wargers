// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
import React from 'react'
import ReactDOM from 'react-dom/client'
import FunSignup from './compsignup'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
// firebase.initializeApp({
//   apiKey: "AIzaSyBhsQ4b1kDIQzn3nkacOMFS6ibUMT2gmik",
//   authDomain: "extension-site.firebaseapp.com",
//   projectId: "extension-site",
//   storageBucket: "extension-site.appspot.com",
//   messagingSenderId: "212009730365",
//   appId: "1:212009730365:web:0693a2530c77fa0ac38554",
//   measurementId: "G-GCDGFNKYDR"
// })
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FunSignup></FunSignup>
  </React.StrictMode>,
)