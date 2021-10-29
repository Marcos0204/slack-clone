import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm7HKCGEoAbDhmEkVT745OIN_RuZKYdUY",
  authDomain: "slack-clone-yt-61d2a.firebaseapp.com",
  projectId: "slack-clone-yt-61d2a",
  storageBucket: "slack-clone-yt-61d2a.appspot.com",
  messagingSenderId: "638560870278",
  appId: "1:638560870278:web:cd485598d190bae8179607"
};

initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, db };