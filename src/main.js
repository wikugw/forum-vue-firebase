import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/database'
import AppDate from '@/components/AppDate'

Vue.component('AppDate', AppDate)

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('fetchAuthUser')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  beforeCreate () {
    store.dispatch('fetchUser', {id: store.state.authId})
  }
})
