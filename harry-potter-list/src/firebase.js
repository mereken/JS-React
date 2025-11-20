import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1p85g4b-Bjd9abEs1lfVjNSCHRaBL8S0",
  authDomain: "restaurant-app-8653a.firebaseapp.com",
  projectId: "restaurant-app-8653a",
  storageBucket: "restaurant-app-8653a.firebasestorage.app",
  messagingSenderId: "372305232864",
  appId: "1:372305232864:web:cd3863ab8d79a935efe185"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);