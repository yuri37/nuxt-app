import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// SDKを使用するためのConfig情報
const firebaseConfig = {
  apiKey: "AIzaSyDxdZFY4p23Y0MNH7C6nwFBx0s8ikM5FaY",
  authDomain: "nuxt-project-efd56.firebaseapp.com",
  projectId: "nuxt-project-efd56",
  storageBucket: "nuxt-project-efd56.appspot.com",
  messagingSenderId: "544045226002",
  appId: "1:544045226002:web:217870a3519c54f9dd60cb",
  measurementId: "G-1P3MF91GVJ"
}
// Appの初期化
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
// 今回使用するAPI
export const auth = firebase.auth()
export const firestore = firebase.firestore()