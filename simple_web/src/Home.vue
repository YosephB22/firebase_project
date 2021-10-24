<template>
    <div class="home">
        <div class="profile">
            <img alt="Vue logo" src="./assets/default_pic.jpg">
            <h1>{{first_name}} {{last_name}}</h1>
            <h2>{{email}}</h2>
        </div>
        

    </div>
</template>
<script>
export default {
    name: "home",
    data() {
        return {
            first_name: localStorage.getItem("first_name"),
            last_name: localStorage.getItem("last_name"),
            email: localStorage.getItem("email"),
        };
    },
    methods: {}
}
</script>
<style scoped>
    .home {
        font: 100;
    }
    img {
        border-radius: 80%;
    }
</style>