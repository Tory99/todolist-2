// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOamVwpc61_aTjVp8C2Dc4VF4yNYzdVhQ",
  authDomain: "todolist-8a9dc.firebaseapp.com",
  projectId: "todolist-8a9dc",
  storageBucket: "todolist-8a9dc.firebasestorage.app",
  messagingSenderId: "1042446205326",
  appId: "1:1042446205326:web:67171eade6dcdda79964df"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);