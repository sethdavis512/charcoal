<template>
    <nav class="panel">
        <p
            class="panel-heading"
            v-if="heading"
        >
            {{ heading }}
        </p>
        <slot></slot>
    </nav>
</template>

<script>
export default {
    props: {
        heading: {
            type: String
        }
    }
}
</script>

<style lang="scss">
</style>
