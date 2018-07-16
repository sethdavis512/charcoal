<template>
    <nav
        aria-label="main navigation"
        class="navbar"
        role="navigation"
    >
        <div class="navbar-brand">
            <slot name="navbar-brand"></slot>
            <!-- Must be last child in navbar-brand -->
            <div
                :class="isActive"
                @click="toggleMenu"
                class="navbar-burger burger"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div
            :class="isActive"
            class="navbar-menu"
        >
            <div class="navbar-start">
                <slot name="navbar-start"></slot>
            </div>
            <div class="navbar-end">
                <slot name="navbar-end"></slot>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isActive: {
                'is-active': false
            }
        }
    },
    methods: {
        toggleMenu() {
            this.isActive['is-active'] = !this.isActive['is-active']
        }
    }
}
</script>

<style lang="scss">
</style>
