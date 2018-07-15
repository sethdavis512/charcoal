<template>
    <ch-section class="login-container">
        <ch-columns>
            <ch-column class="is-6-tablet is-offset-3-tablet is-one-third-desktop is-offset-one-third-desktop">
                <ch-login-form></ch-login-form>
            </ch-column>
        </ch-columns>
    </ch-section>
</template>

<script>
import ChColumns from '../ch-components/columns/Columns.vue'
import ChColumn from '../ch-components/columns/Column.vue'
import ChLoginForm from '../ch-components/form/LoginForm.vue'
import ChSection from '../ch-components/layout/Section.vue'

export default {
    components: {
        ChColumn,
        ChColumns,
        ChLoginForm,
        ChSection
    }
}
</script>

<style lang="scss">
</style>
