<template>
    <ch-section>
        <h1 class="title is-1">
            Profile
        </h1>
        <p>
            <strong>Username:</strong> {{ email }}
        </p>
    </ch-section>
</template>

<script>
import { mapGetters } from 'vuex'
import ChSection from '../ch-components/layout/Section.vue'

export default {
    components: {
        ChSection
    },
    computed: {
        ...mapGetters(['email'])
    }
}

</script>
