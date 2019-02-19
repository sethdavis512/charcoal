<template>
    <div class="login-form">
        <h1 class="title is-1">
            Login
        </h1>
        <ch-box>
            <form @submit.prevent="handleFormSubmit">
                <ch-input
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    v-model="email"
                >
                </ch-input>
                <ch-input
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    v-model="password"
                >
                </ch-input>
                <ch-button
                    class="is-danger"
                    type="submit"
                >
                </ch-button>
            </form>
            <hr>
            <p>
                Not a member? <router-link to="/sign-up">Sign Up</router-link>
            </p>
        </ch-box>
    </div>
</template>

<script>
import firebase from 'firebase';
import { mapActions } from 'vuex';

import ChBox from '../elements/Box.vue'
import ChButton from '../elements/Button.vue'
import ChInput from './Input.vue'

export default {
    components: {
        ChBox,
        ChButton,
        ChInput
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(['setUserEmail']),
        handleFormSubmit() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(res => {
                    this.setUserEmail(res.user.email);
                    this.$router.push('home');
                })
                .catch(err => console.log(err));
        }
    }
}
</script>

<style lang="scss">
.login-form {
    margin: 1em;
}

@media (min-width: 768px) {
    .login-form {
        margin: 3em 0;
    }
}
</style>
