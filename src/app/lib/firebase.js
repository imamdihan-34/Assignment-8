import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
 

const firebaseConfig = {
  apiKey: "AIzaSyC3W6fqEaphn9qOZSiCUYQbBEGC2FSHjy8",
  authDomain: "qurbanihat-livestock-booking.firebaseapp.com",
  projectId: "qurbanihat-livestock-booking",
  storageBucket: "qurbanihat-livestock-booking.firebasestorage.app",
  messagingSenderId: "870026832596",
  appId: "1:870026832596:web:4f13b6717295ee29cd6941",
  measurementId: "G-ZVLKK52D4S"
};
 
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
 
export { auth };
export default app;
 