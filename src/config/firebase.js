import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyD5txE5CU1ZJlOnZetGHYL-lA5DqI1AwDM",
  authDomain: "tiktok---jornada-26aa6.firebaseapp.com",
  projectId: "tiktok---jornada-26aa6",
  storageBucket: "tiktok---jornada-26aa6.appspot.com",
  messagingSenderId: "404094309259",
  appId: "1:404094309259:web:3f3d04e65307ee1354558e",
  measurementId: "G-G8F86H99RB",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
