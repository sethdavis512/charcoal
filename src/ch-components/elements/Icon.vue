<template>
    <span class="icon">
        <i :class="`fa fa-${iconName}`"></i>
    </span>
</template>

<script>
export default {
    props: {
        iconName: {
            type: String
        }
    }
}
</script>

<style lang="scss">
</style>
