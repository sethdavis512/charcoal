<template>
    <article class="message">
        <div class="message-header">
            <slot name="header"></slot>
            <button
                @click="closeMessage"
                class="delete"
            >
            </button>
        </div>
        <div class="message-body">
            <slot name="body"></slot>
        </div>
    </article>
</template>

<script>
export default {
    methods: {
        closeMessage() {
            this.$emit('closeMessage')
        }
    }
}
</script>

<style lang="scss">
</style>
