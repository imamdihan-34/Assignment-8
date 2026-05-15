import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
 

const firebaseConfig = {
  apiKey: "AIzaSyB....",
  authDomain: "abc.firebaseapp.com",
  projectId: "abc",
  storageBucket: "abc.appspot.com",
  messagingSenderId: "123456",
  appId: "1:123:web:xyz"

};
 
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
 
export { auth };
export default app;
 