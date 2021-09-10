import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBd6JgJIDX0J8rdXYEcR_acunveXL9DVIg",
  authDomain: "mytutor-finder.firebaseapp.com",
  projectId: "mytutor-finder",
  storageBucket: "mytutor-finder.appspot.com",
  messagingSenderId: "355915370654",
  appId: "1:355915370654:web:b58f18b15bc8eab868ab8f"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;