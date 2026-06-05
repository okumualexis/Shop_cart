// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8wYpZHRDYzhaonexMWixKv4LO842PUBE",
  authDomain: "fir-crud-846d7.firebaseapp.com",
  projectId: "fir-crud-846d7",
  storageBucket: "fir-crud-846d7.firebasestorage.app",
  messagingSenderId: "204502815177",
  appId: "1:204502815177:web:c01b306841f6e873cd1818"
};

// Initialize Firebase
export const app =  initializeApp(firebaseConfig);
export const db = getFirestore(app)
	
