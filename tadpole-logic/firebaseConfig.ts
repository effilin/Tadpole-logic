// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZgi8FPaA-VN421Xed6zG1vcKTKgQ_lbA",
  authDomain: "tad-pole-logic.firebaseapp.com",
  projectId: "tad-pole-logic",
  storageBucket: "tad-pole-logic.firebasestorage.app",
  messagingSenderId: "13771726082",
  appId: "1:13771726082:web:09ac825c5123e3c037f61b",
  measurementId: "G-6WEBEK5827"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;