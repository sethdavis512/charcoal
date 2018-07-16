<template>
    <div class="tabs-container">
        <div :class="`tabs ${modifier}`">
            <ul>
                <li
                    :class="{ 'is-active' : tab.isActive }"
                    v-for="tab in tabs"
                >
                    <a
                        @click="selectTab(tab)"
                        :href="tab.link"
                    >
                        {{ tab.name }}
                    </a>
                </li>
            </ul>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        modifier: {
            type: String
        }
    },
    created() {
        this.tabs = this.$children
    },
    data() {
        return {
            tabs: []
        }
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = tab.name === selectedTab.name
            })
        }
    }
}
</script>

<style lang="scss">
</style>
