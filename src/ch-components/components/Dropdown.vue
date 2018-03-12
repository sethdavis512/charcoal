<template>
    <div
        :class="{ 'is-active': isOpen }"
        class="dropdown"
    >
        <div class="dropdown-trigger">
            <button
                @click="openDropdown"
                aria-controls="dropdown-menu"
                aria-haspopup="true"
                class="button"
            >
                <span>
                    <slot name="name"></slot>
                </span>
                <span class="icon is-small">
                    <i
                        aria-hidden="true"
                        class="fa fa-angle-down"
                    >
                    </i>
                </span>
            </button>
        </div>
        <div
            class="dropdown-menu"
            id="dropdown-menu"
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
        isOpen: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        openDropdown() {
            this.$emit('openDropdown')
        }
    }
}

</script>

<style lang="scss"></style>
