<template>
    <!-- bootstrap log in form -->
    <br>
    <!-- bootstrap sign up -->
    <div class="signup-form">
    <form action="/examples/actions/confirmation.php" method="post">
		<h2>Log In</h2>
		<p>Please fill in this form to login to your account!</p>
		<hr>
        <div class="form-group">
            <input v-model="email" type="email" class="form-control" name="email" placeholder="Email" required="required">
        </div>
		<div class="form-group">
            <input v-model="password" type="password" class="form-control" name="password" placeholder="Password" required="required">
        </div>        
        <br>
		<div class="form-group">
            <button @click="LogIn()" type="submit" class="btn btn-primary btn-lg">Log In</button>
        </div>
    </form>
    <router-link to="/">
        <p class="login_link">Don't have an account yet?</p>
    </router-link>
    </div>
</template>
<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from "./main";
export default {
    name: "login",
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        LogIn() {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then(function(res) {
                    console.log(res)
                    alert("ypu are looged in")
                    router.replace("/home")
                })
                .then(function(err) {
                    alert(err)
                });
        }
    }
}
</script>
<style scoped>
    body {
		color: #fff;
		background: #048eeb;
		font-family: 'Roboto', sans-serif;
	}
    .form-control{
		height: 50px;
		background: #f2f2f2;
		box-shadow: none !important;
		border: none;
	}
	.form-control:focus{
		background: #e2e2e2;
	}
    .form-control, .btn{        
        border-radius: 10px;
    }
	.signup-form{
		width: 390px;
		margin: 30px auto;
	}
	.signup-form form{
		color: #999;
		border-radius: 3px;
        margin-bottom: 15px;
        background: #fff;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
    }
	.signup-form h2 {
		color: #333;
		font-weight: bold;
        margin-top: 0;
    }
    .signup-form hr {
        margin: 0 -30px 20px;
    }    
	.signup-form .form-group{
		margin-bottom: 20px;
	}
	.signup-form input[type="checkbox"]{
		margin-top: 3px;
	}
	.signup-form .row div:first-child{
		padding-right: 10px;
	}
	.signup-form .row div:last-child{
		padding-left: 10px;
	}
    .signup-form .btn{        
        font-size: 16px;
        font-weight: bold;
		background: #3598dc;
		border: none;
		min-width: 140px;
    }
	.signup-form .btn:hover, .signup-form .btn:focus{
		background: #2389cd !important;
        outline: none;
	}
    .signup-form a{
		color: #fff;
		text-decoration: underline;
	}
	.signup-form form a:hover{
		text-decoration: underline;
	}
    .login_link {
        color: #2389cd;
    }

</style>