<template>
    <div class="notification">
        <button
            @click="dismiss"
            class="delete"
        >
        </button>
        <slot></slot>
    </div>
</template>

<script>
export default {
    methods: {
        dismiss() {
            this.$emit('dismiss')
        }
    }
}
</script>

<style lang="scss">
</style>
