import firebase from 'firebase';


const firebaseApp = firebase.initializeApp ({
    
    apiKey: "AIzaSyBQkWdWtNNcTJSLjY1uiJc19_fEM7QSk_0",
    authDomain: "shopping-app-clone-6aa4c.firebaseapp.com",
    projectId: "shopping-app-clone-6aa4c",
    storageBucket: "shopping-app-clone-6aa4c.appspot.com",
    messagingSenderId: "675080591500",
    appId: "1:675080591500:web:9f3d15643cfdea069003a9",
    measurementId: "G-FL5BRPN4B5"

})


const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};
