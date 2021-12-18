import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query,where } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDPrTxGNNz87iMnrB93hGbYRkSJO7lOE5Q",
  authDomain: "react-js-9d183.firebaseapp.com",
  databaseURL: "https://react-js-9d183-default-rtdb.firebaseio.com",
  projectId: "react-js-9d183",
  storageBucket: "react-js-9d183.appspot.com",
  messagingSenderId: "588822649173",
  appId: "1:588822649173:web:f31aface29b51808f5f7dc",
  measurementId: "G-JRG7MB000F"
});

const auth = getAuth();
const db = getFirestore();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,

    db,
    doc,
    setDoc,
    getDoc,
    addDoc,
    collection,
    getDocs,
    query,
    where
};