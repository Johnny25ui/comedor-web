import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBipE4KZJdZpE8h-hL05O6BtnMEfp6A7k0",
  authDomain: "comedor-web1.firebaseapp.com",
  projectId: "comedor-web1",
  storageBucket: "comedor-web1.firebasestorage.app",
  messagingSenderId: "917642834603",
  appId: "1:917642834603:web:269bc9d94f91623152fdee"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);