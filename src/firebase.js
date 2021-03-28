import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCvH5g05uDfdnqut4VVc8v9eEQ-qR2KB1U',
  authDomain: 'react-authentication-50de9.firebaseapp.com',
  projectId: 'react-authentication-50de9',
  storageBucket: 'react-authentication-50de9.appspot.com',
  messagingSenderId: '414924834589',
  appId: '1:414924834589:web:04ae820198e06bd44783f4',
})

export const auth = app.auth()
export default app
