import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAL8qb4iruOYv2FfHuBR1gBRoEUU4t-QzU",
  authDomain: "focus-check-lkm-001.firebaseapp.com",
  projectId: "focus-check-lkm-001",
  storageBucket: "focus-check-lkm-001.appspot.com",
  messagingSenderId: "1082075933137",
  appId: "1:1082075933137:web:7f7782ad0dcb49de91d8f0",
  measurementId: "G-YCRQZQWHJX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);