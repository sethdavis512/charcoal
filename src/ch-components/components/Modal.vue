<template>
    <div
        :class="{ 'is-active': isOpen }"
        class="modal"
    >
        <div
            @click="closeClick"
            class="modal-background"
        >
        </div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">
                    <slot name="title"></slot>
                </p>
                <button
                    aria-label="close"
                    class="delete"
                    @click="closeClick"
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
