// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAChBA6rUftyZAD1CBbqNkTSItCH4muEo",
  authDomain: "eco-venture-5e197.firebaseapp.com",
  projectId: "eco-venture-5e197",
  storageBucket: "eco-venture-5e197.firebasestorage.app",
  messagingSenderId: "980843641814",
  appId: "1:980843641814:web:0f54b898b34f2e66ac4277",
  measurementId: "G-TVE3EFRKVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;