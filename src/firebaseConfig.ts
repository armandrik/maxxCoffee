// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , onAuthStateChanged} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa_evyhP89ezc0sIs7CAMpZfWevCD48Bk",
  authDomain: "maxxcoff33.firebaseapp.com",
  projectId: "maxxcoff33",
  storageBucket: "maxxcoff33.appspot.com",
  messagingSenderId: "781149983423",
  appId: "1:781149983423:web:be8ae091b8fd2f41462c0a",
  measurementId: "G-LLCVWFR7Z7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, you can use user details here
    console.log("User signed in");
  } else {
    // User is signed out
    console.log("No user signed in");
  }
});

export {auth}