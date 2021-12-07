import firebase from "firebase";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZRsPNqy3gFMrrak0-cbT8B1bX1wKNzuk",
  authDomain: "news-bank-ec00e.firebaseapp.com",
  projectId: "news-bank-ec00e",
  storageBucket: "news-bank-ec00e.appspot.com",
  messagingSenderId: "921030688360",
  appId: "1:921030688360:web:fc5bc4e6ced239949005dd",
  measurementId: "G-JY30XSZVKP",
};

//init firebase

firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
