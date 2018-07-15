<template>
    <progress
        :max="max"
        :value="progress"
        class="progress"
    >
    </progress>
</template>

<script>
export default {
    props: {
        progress: {
            type: Number
        },
        max: {
            type: String
        }
    }
}
</script>

<style lang="scss">
</style>
