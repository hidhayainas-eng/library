// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBgK3McMsfJX-DUANEfawjL0-H_Gi_cCI",
  authDomain: "libraryms-e01ac.firebaseapp.com",
  projectId: "libraryms-e01ac",
  storageBucket: "libraryms-e01ac.firebasestorage.app",
  messagingSenderId: "803016954574",
  appId: "1:803016954574:web:c33afe1e7c9394c3c6769f",
  measurementId: "G-PF2YKJQXW4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase App Object:", app);
const analytics = getAnalytics(app);
export default app;
