<template>
  <div class="register">
      <input v-model="first_name" type="text" placeholder="first  name"><br>
      <input v-model="last_name" type="text" placeholder="last name"><br>
      <input v-model="email" type="email" placeholder="email">
      <br>
      <input v-model="password" type="password" placeholder="password">
      <br>
      <p>back to <router-link to="/">Login</router-link></p>
      <button @click="Register()" type="button">Register</button>

  </div>
</template>
<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import router from "./main";
export default {
    name: "register",
    data() {
        return {
            email: "",
            password: "",
            first_name: "",
            last_name: ""
        };
    },
    methods: {
        
        Register() {
            localStorage.setItem("first_name", this.first_name);
            localStorage.setItem("last_name", this.last_name);
            console.log(this.first_name);
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then(function(response) {
                    console.log(response)
                    alert("you have created an account")
                    localStorage.setItem("email", response.user.email)
                    localStorage.setItem("uid", response.user.uid)
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