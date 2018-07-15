<template>
    <li>
        <a :href="url">
            <span
                class="icon is-small"
                v-if="iconName"
            >
                <i :class="`fa fa-${iconName}`"></i>
            </span>
            <slot></slot>
        </a>
    </li>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            default: '#'
        },
        text: {
            type: String,
            default: 'Link'
        },
        iconName: {
            type: String
        }
    }
}
</script>

<style lang="scss">
</style>
