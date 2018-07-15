<template>
    <ch-navbar class="is-fixed-top is-dark">
        <router-link
            class="navbar-item"
            slot="navbar-brand"
            to="/"
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
            to="/sign-up"
        >
            <font-awesome-icon icon="pencil-alt" />
            Sign Up
        </router-link>
        <router-link
            active-class="is-active"
            class="navbar-item"
            slot="navbar-end"
            to="/login"
        >
            <font-awesome-icon icon="sign-in-alt" />
            Login
        </router-link>
    </ch-navbar>
</template>

<script>

import ChNavbar from '../ch-components/components/Navbar.vue'

export default {
    components: {
        ChNavbar
    }
}

</script>

<style lang="scss">

.navbar-brand,
.navbar-start,
.navbar-end {
    svg.svg-inline--fa {
        margin-right: .5em;
    }
}

</style>
