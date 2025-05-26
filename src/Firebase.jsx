import {initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyChqznSHxH6RqjDMIwLTh6VN0PhAZEfjO0",
  authDomain: "fb-react-1.firebaseapp.com",
  projectId: "fb-react-1",
  storageBucket: "fb-react-1.firebasestorage.app",
  messagingSenderId: "386193541564",
  appId: "1:386193541564:web:b969099f7bd708ed6143b9"
};

export const app = initializeApp(firebaseConfig)
