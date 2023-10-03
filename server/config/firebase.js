import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCd_tyo0sShwb7TVY6HhgkeJLVAzKYuvPk",
  authDomain: "hostel-management-system-4e2d2.firebaseapp.com",
  projectId: "hostel-management-system-4e2d2",
  storageBucket: "hostel-management-system-4e2d2.appspot.com",
  messagingSenderId: "407230563251",
  appId: "1:407230563251:web:813a0e538727a56a1f41c6",
  measurementId: "G-7Y8KEYJZ28"
};

export const app = initializeApp(firebaseConfig);
export const firestore = app.firestore();