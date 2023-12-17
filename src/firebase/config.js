// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBFavLCAqh7xpKVZZbbMFOTJ14y-vP_0xE",
authDomain: "single-player-magazines.firebaseapp.com",
projectId: "single-player-magazines",
storageBucket: "single-player-magazines.appspot.com",
messagingSenderId: "605141364292",
appId: "1:605141364292:web:4ddad2a0d5974f3a615611",
measurementId: "G-404RESNCC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);