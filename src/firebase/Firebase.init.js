// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByriU83eG9c8zMGe0_xlh04SmeTZZ1v9U",
  authDomain: "sports-equipment-store-c035a.firebaseapp.com",
  projectId: "sports-equipment-store-c035a",
  storageBucket: "sports-equipment-store-c035a.firebasestorage.app",
  messagingSenderId: "195030635300",
  appId: "1:195030635300:web:7dfb8f6d385ad2f01199b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);