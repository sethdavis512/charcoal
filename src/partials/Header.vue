<template>
    <ch-navbar class="is-fixed-top is-dark">
        <router-link
            class="navbar-item"
            slot="navbar-brand"
            to="/home"
        >
            <font-awesome-icon icon="home" />
            Home
        </router-link>
        <router-link
            active-class="is-active"
            class="navbar-item"
            slot="navbar-end"
            to="/about"
        >
            <font-awesome-icon icon="book" />
            About
        </router-link>
        <router-link
            active-class="is-active"
            class="navbar-item"
            slot="navbar-end"
            to="/login"
            v-show="!email"
        >
            <font-awesome-icon icon="sign-in-alt" />
            Login
        </router-link>
        <router-link
            active-class="is-active"
            class="navbar-item"
            slot="navbar-end"
            to="/profile"
            v-if="email"
        >
            <font-awesome-icon icon="user-circle" />
            {{ email | usernameify }}
        </router-link>
        <a
            @click="handleLogout"
            class="navbar-item"
            slot="navbar-end"
        >
            Logout
        </a>
    </ch-navbar>
</template>

<script>
import firebase from 'firebase';
import { mapGetters, mapActions } from 'vuex';
import ChNavbar from '../ch-components/components/Navbar.vue'

export default {
    components: {
        ChNavbar
    },
    computed: {
        ...mapGetters(['email'])
    },
    methods: {
        ...mapActions(['clearUser']),
        handleLogout() {
            firebase.auth().signOut()
                .then(() => {
                    this.clearUser();
                    this.$router.push('login');
                })
                .catch(err => console.log(err));
        }
    },
    filters: {
        usernameify(email) {
            return email.split('@')[0];
        }
    }
}
</script>

<style lang="scss">
.navbar-brand,
.navbar-start,
.navbar-end {
    svg.svg-inline--fa {
        margin-right: 0.5em;
    }
}
</style>
