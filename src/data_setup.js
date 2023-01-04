import { initializeApp } from "firebase/app";
import firebase from 'firebase';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCuPGh4E12VM982Nv5YtqjZ7aYfkS4Tz6E",
  authDomain: "weather-bot-aaa81.firebaseapp.com",
  projectId: "weather-bot-aaa81",
  storageBucket: "weather-bot-aaa81.appspot.com",
  messagingSenderId: "637249415762",
  appId: "1:637249415762:web:759b50f9a69ec19f240d8b",
  measurementId: "G-9GHN4HYXH9"
};


firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database;