
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDDPeld5PL3sgbM4yTmZ13mND3bBMMq7W8",
  authDomain: "nwankwo-web-ltd.firebaseapp.com",
  databaseURL: "https://nwankwo-web-ltd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nwankwo-web-ltd",
  storageBucket: "nwankwo-web-ltd.firebasestorage.app",
  messagingSenderId: "668663880561",
  appId: "1:668663880561:web:8fcc2569dd97bcc0ebf4d0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
