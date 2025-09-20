// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
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
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Export all the services you need as named exports
export { app, analytics, db };
