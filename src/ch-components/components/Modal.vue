<template>
    <div :class="`modal ${ isOpen ? 'is-active' : '' }`">
        <div
            @click="closeClick"
            class="modal-background"
        >
        </div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">
                    {{ title }}
                </p>
                <button
                    @click="closeClick"
                    aria-label="close"
                    class="delete"
                >
                </button>
            </header>
            <section class="modal-card-body">
                <slot name="body"></slot>
            </section>
            <footer class="modal-card-foot">
                <slot name="footer"></slot>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isOpen: {
            type: Boolean
        },
        title: {
            type: String,
            default: 'Title'
        }
    },
    methods: {
        primaryClick() {
            this.$emit('primaryClickModal')
            this.$emit('closeModal')
        },
        closeClick() {
            this.$emit('closeModal')
        }
    }
}
</script>

<style lang="scss">
</style>
