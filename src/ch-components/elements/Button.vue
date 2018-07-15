<template>
    <button
        class="button"
        type="button"
    >
        {{ text }}
    </button>
</template>

<script>
export default {
    props: {
        text: {
            default: 'Submit',
            type: String
        }
    }
}
</script>

<style lang="scss">
</style>
