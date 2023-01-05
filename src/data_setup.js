
import { initializeApp } from 'firebase/app';



const firebaseConfig = {
  apiKey: "AIzaSyCuPGh4E12VM982Nv5YtqjZ7aYfkS4Tz6E",
  authDomain: "weather-bot-aaa81.firebaseapp.com",
  databaseURL: "https://weather-bot-aaa81-default-rtdb.firebaseio.com",
  projectId: "weather-bot-aaa81",
  storageBucket: "weather-bot-aaa81.appspot.com",
  messagingSenderId: "637249415762",
  appId: "1:637249415762:web:759b50f9a69ec19f240d8b",
  measurementId: "G-9GHN4HYXH9"
};

const app = initializeApp(firebaseConfig);
export default app;