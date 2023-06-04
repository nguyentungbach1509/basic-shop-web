import firebase from 'firebase';


const firebaseApp = firebase.initializeApp ({
    
    apiKey: "AIzaSyCZcGm5LG4XlD-7ikitWIDRSmJtfbZLLsI",
    authDomain: "basic-shop-web.firebaseapp.com",
    projectId: "basic-shop-web",
    storageBucket: "basic-shop-web.appspot.com",
    messagingSenderId: "616427752039",
    appId: "1:616427752039:web:ef5039f4f62b4a29c8a2c2",
    measurementId: "G-MZPT56QG9X"

})


const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};
