<template>
  <div class="register">
      <input v-model="email" type="email" placeholder="email">
      <br>
      <input v-model="password" type="password" placeholder="password">
      <br>
      <p>back to <router-link to="/">Login</router-link></p>
      <button @click="Register()" type="button">Register</button>

  </div>
</template>
<script>
import firebase from 'firebase/compat/app'; //v9
import router from "./main";
require('firebase/auth');
export default {
    name: "register",
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        
        Register() {
            console.log(this.email);
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(function(response) {
                    console.log(response)
                    alert("you have created an account")
                    router.replace("/home")
                })
                .catch(function(err) {
                    alert(err.message)
                });
        }
    }
}
</script>
<style scoped>

</style>