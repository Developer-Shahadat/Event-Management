// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDGorgucjw6WGchR2iBrV5MuRrE1dhPxQ",
  authDomain: "education-project-80ea6.firebaseapp.com",
  projectId: "education-project-80ea6",
  storageBucket: "education-project-80ea6.appspot.com",
  messagingSenderId: "182577713601",
  appId: "1:182577713601:web:5da14695758a1982c85f40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default  auth