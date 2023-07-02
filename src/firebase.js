import firebase from 'firebase';


const firebaseApp = firebase.initializeApp ({
    
    apiKey: "AIzaSyBW9Z2rKBJJYa-pTvp8jjYudZ6FWdcWYQY",
    authDomain: "basic-shop-app-4b835.firebaseapp.com",
    projectId: "basic-shop-app-4b835",
    storageBucket: "basic-shop-app-4b835.appspot.com",
    messagingSenderId: "565265265294",
    appId: "1:565265265294:web:6b119fe510b038f2270fdf",
    measurementId: "G-K04T79JC67"

})


const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};
