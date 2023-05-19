// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDYczeJob4d3BjxmO4dE0G3zKobOaZFksA",
  authDomain: "algorithmvisualizer-a25eb.firebaseapp.com",
  projectId: "algorithmvisualizer-a25eb",
  storageBucket: "algorithmvisualizer-a25eb.appspot.com",
  messagingSenderId: "498666630867",
  appId: "1:498666630867:web:9a5cd8db38d6fffca42e26",
  measurementId: "G-1LZ96EJW3M"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app ,auth};

