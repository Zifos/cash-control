import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseApp = firebase
  .initializeApp({
    apiKey: 'AIzaSyBm4Rzk4XJgMUTcOH7UytjDdpwRuhj9uXI',
    authDomain: 'finanzas-f54a5.firebaseapp.com',
    databaseURL: 'https://finanzas-f54a5.firebaseio.com',
    projectId: 'finanzas-f54a5',
    storageBucket: 'finanzas-f54a5.appspot.com',
    messagingSenderId: '725324844899',
    appId: '1:725324844899:web:da2fbf6dc754b5d2b4cd56',
    measurementId: 'G-SJDJPTX852'
  })

export const db = firebaseApp.firestore()
