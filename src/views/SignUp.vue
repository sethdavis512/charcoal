<template>
    <div class="sign-up-container">
        <ch-columns>
            <ch-column class="is-4 is-offset-4">
                <ch-sign-up-form></ch-sign-up-form>
            </ch-column>
        </ch-columns>
    </div>
</template>

<script>

import ChColumns from '../ch-components/columns/Columns.vue'
import ChColumn from '../ch-components/columns/Column.vue'
import ChSignUpForm from '../ch-components/form/SignUpForm.vue'

export default {
    components: {
        ChColumn,
        ChColumns,
        ChSignUpForm
    }
}

</script>

<style lang="scss"></style>
