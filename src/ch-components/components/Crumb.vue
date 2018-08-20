<template>
    <li>
        <router-link :to="url">
            <span
                class="icon is-small"
                v-if="iconName"
            >
                <i :class="`fa fa-${iconName}`"></i>
            </span>
            {{ text }}
        </router-link>
    </li>
</template>

<script>
export default {
    props: {
        iconName: {
            type: String
        },
        text: {
            type: String,
            default: 'Link'
        },
        url: {
            type: String,
            default: '/'
        }
    }
}
</script>

<style lang="scss">
</style>
