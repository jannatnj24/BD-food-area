// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs3W42KF7j6qs52gl8OMrxdlyThTLTCpI",
  authDomain: "bd-food-area.firebaseapp.com",
  projectId: "bd-food-area",
  storageBucket: "bd-food-area.appspot.com",
  messagingSenderId: "925257379980",
  appId: "1:925257379980:web:25e0a75b8e2f6b8154cba9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;