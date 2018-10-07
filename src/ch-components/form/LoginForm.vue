<template>
    <div class="login-form">
        <h1 class="title is-1">
            Login
        </h1>
        <ch-box>
            <ch-form
                :payload="user"
                :url="resource"
            >
                <ch-input
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    v-model="user.email"
                >
                </ch-input>
                <ch-input
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    v-model="user.password"
                >
                </ch-input>
                <ch-button
                    class="is-danger"
                    type="submit"
                >
                </ch-button>
            </ch-form>
            <hr>
            <p>
                Not a member? <router-link to="/sign-up">Sign Up</router-link>
            </p>
        </ch-box>
    </div>
</template>

<script>
import ChBox from '@/ch-components/elements/Box.vue'
import ChButton from '@/ch-components/elements/Button.vue'
import ChForm from '@/ch-components/form/Form.vue'
import ChInput from '@/ch-components/form/Input.vue'

export default {
    components: {
        ChBox,
        ChButton,
        ChForm,
        ChInput
    },
    data() {
        return {
            resource: 'http://www.your-url.com/',
            user: {
                email: '',
                password: ''
            }
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
