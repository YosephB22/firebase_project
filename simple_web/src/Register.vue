<template>
    <br>
    <!-- bootstrap log in -->
    <div class="signup-form">
    <form action="/examples/actions/confirmation.php" method="post">
		<h2>Sign Up</h2>
		<p>Please fill in this form to create an account!</p>
		<hr>
        <div class="form-group">
            <div class="row">
                <div class="col-xs-6"><input v-model="first_name" type="text" class="form-control" name="first_name" placeholder="First Name" required="required"></div>
                <div class="col-xs-6"><input v-model="last_name" type="text" class="form-control" name="last_name" placeholder="Last Name" required="required"></div>
            </div>        	
        </div>
        <div class="form-group">
            <input v-model="email" type="email" class="form-control" name="email" placeholder="Email" required="required">
        </div>
		<div class="form-group">
            <input v-model="password" type="password" class="form-control" name="password" placeholder="Password" required="required">
        </div>        
        <div class="form-group">
			<label class="checkbox-inline"><input type="checkbox" required="required"> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div>
		<div class="form-group">
            <button @click="Register()" type="submit" class="btn btn-primary btn-lg">Sign Up</button>
        </div>
    </form>
    <router-link to="/">
        <p class="login_link">Already have an account?</p>
    </router-link>
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
	.signup-form a:hover{
		text-decoration: none;
	}
	.signup-form form a{
		color: #3598dc;
		text-decoration: none;
	}	
	.signup-form form a:hover{
		text-decoration: underline;
	}
    .login_link {
        color: #2389cd;
    }

</style>