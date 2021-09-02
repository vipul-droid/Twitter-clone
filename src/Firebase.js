import firebase from  "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD8grFdHrb5B2Gztcy4p33jkV1mbGY7oiw",
    authDomain: "twitter-clone-554b5.firebaseapp.com",
    projectId: "twitter-clone-554b5",
    storageBucket: "twitter-clone-554b5.appspot.com",
    messagingSenderId: "716089579764",
    appId: "1:716089579764:web:b2da7dc6447730c20266a1",
    measurementId: "G-2V71WWG2PB"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;