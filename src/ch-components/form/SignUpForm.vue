<template>
    <div class="sign-up-form">
        <h1 class="title is-1">
            Sign Up
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
                Already a member? <router-link to="/login">Login</router-link>
            </p>
        </ch-box>
    </div>
</template>

<script>
import firebase from 'firebase';

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
        handleFormSubmit() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(res => this.$router.push('login'))
                .catch(err => console.log(err));
        }
    }
}
</script>

<style lang="scss">
.sign-up-form {
    margin: 1em;
}

@media (min-width: 768px) {
    .sign-up-form-container {
        margin: 3em 0;
    }
}
</style>
