import firebase from 'firebase';


const firebaseApp = firebase.initializeApp ({
    
    apiKey: "AIzaSyCudZ_MPyJKOlBCVJ1jZSbltfFYG4McxDE",
    authDomain: "shopping-app-5b4da.firebaseapp.com",
    projectId: "shopping-app-5b4da",
    storageBucket: "shopping-app-5b4da.appspot.com",
    messagingSenderId: "752199307960",
    appId: "1:752199307960:web:d9a181ba4a4fee616eda4d",
    measurementId: "G-XLSZ68GYJY"

})


const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};