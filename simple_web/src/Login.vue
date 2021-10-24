<template>
    <div class="login">
        <h3>login</h3>
        <input type="text" placeholder="email">
        <br>
        <input type="passord" placeholder="****">
        <br>
        <button>Login</button>
        <br>
        <p>you don't have an account yet? You can <router-link to="/register">Register</router-link></p>

    </div>
</template>
<script>
export default {
    name: "login",
    data() {
        return {};
    },
    methods: {}
}
</script>
<style scoped>

</style>