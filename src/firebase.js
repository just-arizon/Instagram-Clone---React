// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyCPeoLtIGvvAN4YV2AoHGEZVQ5zOzBj8",
  authDomain: "instagram-clone-14b68.firebaseapp.com",
  projectId: "instagram-clone-14b68",
  storageBucket: "instagram-clone-14b68.appspot.com",
  messagingSenderId: "224741286624",
  appId: "1:224741286624:web:d83385e4d8d92f46806685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();