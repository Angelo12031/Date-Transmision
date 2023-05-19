<template>
    <div class="page-holder align-items-center py-4 bg-gray-100 vh-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 px-lg-4"  v-if="userlogin">
                    <div class="card">
                        <div class="card-header px-lg-5">
                            <div class="card-heading text-primary">Login</div>
                        </div>
                        <div class="card-body p-lg-5">
                            <h3 class="mb-4">Hi, welcome back! ??</h3>
                            <form id="loginForm" action="index.html">
                                <div class="form-floating mb-3">
                                    <input class="form-control" id="floatingInput" type="email" placeholder="name@example.com" required>
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input class="form-control" id="floatingPassword" type="password" placeholder="Password" required>
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember">
                                    <label class="form-check-label" for="remember">Remember me</label>
                                </div>
                                <router-link :to="{ path: '/car' }"><button class="btn btn-primary" type="button">Login</button></router-link>
                            </form>
                        </div>
                        <div class="card-footer px-lg-5 py-lg-4">
                            <div class="text-sm text-muted">Don't have an account? <a type="button" @click="user_register()" >Register</a>.</div>
                        </div>
                    </div>
                </div>
                <!-- register -->
                <div class="col-lg-6 px-lg-4" v-if="userregister">
                    <div class="card">
                        <div class="card-header px-lg-5">
                            <div class="card-heading text-primary">Register</div>
                        </div>
                        <div class="card-body p-lg-5">
                            <h3 class="mb-4">Get started</h3>
                            <form action="index.html">
                                <div class="form-floating mb-3">
                                    <input class="form-control" id="username" type="email" placeholder="name@example.com" required>
                                    <label for="username">Username</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input class="form-control" id="floatingInput" type="email" placeholder="name@example.com" required>
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input class="form-control" id="floatingPassword" type="password" placeholder="Password" required>
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="checkbox" name="agree" id="agree">
                                    <label class="form-check-label" for="agree">I agree with the <a href="#">Terms & Conditions</a>.</label>
                                </div>
                                <div class="form-group">
                                    <router-link :to="{ path: '/car' }"><button class="btn btn-primary" type="button">Register</button></router-link>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer px-lg-5 py-lg-4">
                            <div class="text-sm text-muted">Already have an account? <a type="button" @click="user_login()">Login</a>.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import {defineComponent} from "vue";

export default defineComponent({
    methods: {
        //user login button click event
        user_login()
        {
            this.userlogin = true,
                this.userregister = false
        },
        //user register button click event
        user_register()
        {
            this.userlogin = false,
                this.userregister = true
        }
    },
    data: function() {
        return {
            userlogin:true,
            userregister:false
        }
    }
})
</script>