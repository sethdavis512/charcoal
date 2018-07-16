<template>
    <a
        class="panel-block"
        :href="href"
    >
        <slot></slot>
    </a>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            default: '#'
        }
    }
}
</script>

<style lang="scss">
</style>
