<template>
    <li>
        <span
            class="pagination-ellipsis"
            v-if="ellipsis"
        >
            &hellip;
        </span>
        <a
            :href="href"
            class="pagination-link"
            v-else
        >
            <slot></slot>
        </a>
    </li>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            default: '#'
        },
        ellipsis: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss">
</style>
