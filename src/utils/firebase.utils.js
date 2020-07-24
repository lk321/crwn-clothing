import firebase from "firebase/app"

import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyCKpgNzYH59KGW5GTrj0Qt4Ybcf9j5JPRk",
    authDomain: "crwn-db-31459.firebaseapp.com",
    databaseURL: "https://crwn-db-31459.firebaseio.com",
    projectId: "crwn-db-31459",
    storageBucket: "crwn-db-31459.appspot.com",
    messagingSenderId: "605331919312",
    appId: "1:605331919312:web:f1fbaa2600c43d228be9d5",
    measurementId: "G-EQSQ87TXN9"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// Google auth
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase