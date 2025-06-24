// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_Zg3ZWTlANKk66ZsBs35gzwGL0jQj6zY",
  authDomain: "bistro-boss-c2487.firebaseapp.com",
  projectId: "bistro-boss-c2487",
  storageBucket: "bistro-boss-c2487.firebasestorage.app",
  messagingSenderId: "470623843295",
  appId: "1:470623843295:web:86c79d455620f796c68a6a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
