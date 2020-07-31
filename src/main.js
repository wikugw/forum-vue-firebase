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
  apiKey: 'AIzaSyAjvUUyPztPLZ5ziLkfguSYTKIIaybSBfg',
  authDomain: 'vue-forum-f37b3.firebaseapp.com',
  databaseURL: 'https://vue-forum-f37b3.firebaseio.com',
  projectId: 'vue-forum-f37b3',
  storageBucket: 'vue-forum-f37b3.appspot.com',
  messagingSenderId: '969661283114',
  appId: '1:969661283114:web:91302a0b5fbe624d1e3c53',
  measurementId: 'G-T0XE202DB7'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
