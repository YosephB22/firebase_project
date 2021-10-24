import { createApp } from 'vue'
import App from './App.vue'
import Login from "./Login.vue";
import Register from "./Register.vue"
import { createWebHistory, createRouter } from 'vue-router';
import Home from "./Home.vue";
import firebase from 'firebase/compat/app'; //v9

const routes = [
    {
        path: "/",
        name: "login",
        component: Login
    },
    {
        path: "/home",
        name: "home",
        component: Home
    },
    {
        path: "/register",
        name: "register",
        component: Register
    }
];
const router = createRouter({
    routes,
    history: createWebHistory()
});
export default router;
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGAgGyJQX3Kc8gkH_tLj0r1p2i8-YP-nA",
    authDomain: "vue-firebase-tutorial-6b812.firebaseapp.com",
    projectId: "vue-firebase-tutorial-6b812",
    storageBucket: "vue-firebase-tutorial-6b812.appspot.com",
    messagingSenderId: "455478559695",
    appId: "1:455478559695:web:ea4124a0c7204fbcfb88ba",
    measurementId: "G-80H4D4BW1M"
  };

firebase.initializeApp(firebaseConfig);
const app = createApp(App);
app.use(router);
app.mount('#app');
