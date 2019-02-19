<template>
    <div :class="`dropdown ${isOpen ? 'is-active' : ''}`">
        <div class="dropdown-trigger">
            <button
                @click="isOpen = !isOpen"
                aria-controls="dropdown-menu"
                aria-haspopup="true"
                class="button"
            >
                <span>
                    {{ text }}
                </span>
                <span class="icon is-small">
                    <font-awesome-icon icon="angle-down" />
                </span>
            </button>
        </div>
        <div
            class="dropdown-menu"
            role="menu"
        >
            <div class="dropdown-content">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: 'Button'
        }
    },
    data() {
        return {
            isOpen: false
        }
    }
}
</script>

<style lang="scss">
</style>
