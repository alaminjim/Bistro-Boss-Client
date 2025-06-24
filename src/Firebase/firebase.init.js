// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnjP6BTlKXcF4Z2XytumXNCr5pWSCt_hE",
  authDomain: "bistro-boss-7d999.firebaseapp.com",
  projectId: "bistro-boss-7d999",
  storageBucket: "bistro-boss-7d999.firebasestorage.app",
  messagingSenderId: "219572317819",
  appId: "1:219572317819:web:8b861a39ba209e9c78fcde",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
