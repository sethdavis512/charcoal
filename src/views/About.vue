<template>
    <ch-section>
        <h1 class="title is-1">
            About
        </h1>
        <p class="spacer-bottom">
            Charcoal is a simple starter template using the new
            <code>Vue CLI 3.0</code> and styled with <code>Bulma</code>.
        </p>
        <p class="content">
            Included packages:
            <ul>
                <li>
                    Vue
                </li>
                <li>
                    Vuex
                </li>
                <li>
                    Vue Router
                </li>
                <li>
                    Bulma
                </li>
                <li>
                    Axios
                </li>
                <li>
                    Lodash
                </li>
                <li>
                    Moment
                </li>
                <li>
                    Jest
                </li>
                <li>
                    Font Awesome 5
                </li>
            </ul>
        </p>
        <hr>
        <h3 class="title is-3">
            Vuex
        </h3>
        <p class="spacer-bottom">
            Charcoal comes with Vuex baked right in.
        </p>
        <ch-button-group>
            <ch-button
                @click.native="decrement"
                text="-"
            >
            </ch-button>
            <span class="button">
                {{ counter }}
            </span>
            <ch-button
                @click.native="increment"
                text="+"
            >
            </ch-button>
        </ch-button-group>
    </ch-section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import ChButton from '../ch-components/elements/Button.vue'
import ChButtonGroup from '../ch-components/elements/ButtonGroup.vue'
import ChSection from '../ch-components/layout/Section.vue'

export default {
    components: {
        ChButton,
        ChButtonGroup,
        ChSection
    },
    computed: {
        ...mapGetters(['counter'])
    },
    methods: {
        ...mapActions(['decrement', 'increment'])
    }
}
</script>

<style lang="scss">
p.spacer-bottom {
    margin-bottom: 1.5em;
}
</style>
