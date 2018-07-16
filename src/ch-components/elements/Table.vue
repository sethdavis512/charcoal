<template>
    <table class="table">
        <thead>
            <slot name="thead"></slot>
        </thead>
        <tfoot v-if="hasFooter">
            <slot name="tfoot"></slot>
        </tfoot>
        <tbody>
            <slot name="tbody"></slot>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        hasFooter: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss">
</style>
