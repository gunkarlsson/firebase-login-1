import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAHZAA6tABYSof8SjT8j9fqDaFs5NIHfgE",
  authDomain: "login-authentication-6ecfb.firebaseapp.com",
  projectId: "login-authentication-6ecfb",
  storageBucket: "login-authentication-6ecfb.appspot.com",
  messagingSenderId: "891506993539",
  appId: "1:891506993539:web:357cb5fbae5ad41a272eb6",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
