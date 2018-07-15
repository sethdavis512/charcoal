<template>
    <!-- Photo by Magnus S on Unsplash -->
    <ch-hero
        class="is-danger is-bold is-large has-text-centered"
        bg-img-url="https://res.cloudinary.com/setholito/image/upload/v1531689610/charcoal/charcoal-background.jpg"
    >
        <img
            src="../assets/charcoal-logo.svg"
            width="150"
        >
        <h1 class="title is-1">
            {{ title }}
        </h1>
        <h2 class="subtitle">
            {{ subtitle }}
        </h2>
    </ch-hero>
</template>

<script>
import ChHero from '../ch-components/layout/Hero.vue'

export default {
    data() {
        return {
            title: 'Charcoal',
            subtitle: 'Fuel for Web Apps'
        }
    },
    components: {
        ChHero
    }
}
</script>

<style lang="scss">
</style>
