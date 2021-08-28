import {initializeApp} from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDy4FoTRGczbWK7UrIvnj3SYg-px1ehhQc",
  authDomain: "tutor-app-f7a4e.firebaseapp.com",
  projectId: "tutor-app-f7a4e",
  storageBucket: "tutor-app-f7a4e.appspot.com",
  messagingSenderId: "60081732349",
  appId: "1:60081732349:web:778875d1812530c8d95c94"
};
const app=initializeApp(firebaseConfig);
export default app;