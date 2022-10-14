import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth , onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDG7vqFepMZo2n-QxSHn2m0EXQmEvzZuZ8",
  authDomain: "todos-322.firebaseapp.com",
  projectId: "todos-322",
  storageBucket: "todos-322.appspot.com",
  messagingSenderId: "120943367329",
  appId: "1:120943367329:web:8537ef49de618f61704ce0",
  measurementId: "G-4JDQG0W62B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);