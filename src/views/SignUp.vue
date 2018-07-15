<template>
    <ch-section class="sign-up-container">
        <ch-columns>
            <ch-column class="is-6-tablet is-offset-3-tablet is-one-third-desktop is-offset-one-third-desktop">
                <ch-sign-up-form></ch-sign-up-form>
            </ch-column>
        </ch-columns>
    </ch-section>
</template>

<script>
import ChColumns from '../ch-components/columns/Columns.vue'
import ChColumn from '../ch-components/columns/Column.vue'
import ChSignUpForm from '../ch-components/form/SignUpForm.vue'
import ChSection from '../ch-components/layout/Section.vue'

export default {
    components: {
        ChColumn,
        ChColumns,
        ChSignUpForm,
        ChSection
    }
}
</script>

<style lang="scss">
</style>
