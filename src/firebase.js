import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAe4UAVn3QKQdnvtQAxxL48OPxqPdtH2Bw",
  authDomain: "resepmasak-363e4.firebaseapp.com",
  projectId: "resepmasak-363e4",
  storageBucket: "resepmasak-363e4.firebasestorage.app",
  messagingSenderId: "907737354698",
  appId: "1:907737354698:web:3b40006c198c8922e03f33",
  measurementId: "G-6DQGMCKDSD"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);