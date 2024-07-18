// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5CqG0DN1FJ05JMihKkKVdV9kCSFf76I8",
  authDomain: "final-exam-3f576.firebaseapp.com",
  databaseURL: "https://final-exam-3f576-default-rtdb.firebaseio.com",
  projectId: "final-exam-3f576",
  storageBucket: "final-exam-3f576.appspot.com",
  messagingSenderId: "126862100932",
  appId: "1:126862100932:web:f8494d6e60925df5593c91",
  measurementId: "G-XP2NSESTKT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);