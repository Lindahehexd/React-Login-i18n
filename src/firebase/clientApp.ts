// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6NPG-SgwmVNABzB7ElShytLUsj8nO-_E",
  authDomain: "project-2653598219213929996.firebaseapp.com",
  projectId: "project-2653598219213929996",
  storageBucket: "project-2653598219213929996.appspot.com",
  messagingSenderId: "670629171489",
  appId: "1:670629171489:web:a1692cd0d48e1745bcae60",
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
