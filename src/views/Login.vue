<template>
    <div class="login-container">
        <ch-columns>
            <ch-column class="is-4 is-offset-4">
                <ch-login-form></ch-login-form>
            </ch-column>
        </ch-columns>
    </div>
</template>

<script>

import ChColumns from '../ch-components/columns/Columns.vue'
import ChColumn from '../ch-components/columns/Column.vue'
import ChLoginForm from '../ch-components/form/LoginForm.vue'

export default {
    components: {
        ChColumn,
        ChColumns,
        ChLoginForm
    }
}

</script>

<style lang="scss"></style>
