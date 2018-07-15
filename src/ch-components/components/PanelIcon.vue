<template>
    <span class="panel-icon">
        <i :class="`fa fa-${iconName}`"></i>
    </span>
</template>

<script>
export default {
    props: {
        iconName: {
            type: String,
            default: 'profile'
        }
    }
}
</script>

<style lang="scss">
</style>
