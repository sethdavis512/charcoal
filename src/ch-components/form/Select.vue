<template>
    <div class="field">
        <label class="label">
            {{ label }}
        </label>
        <div class="control">
            <div class="select">
                <select
                    @change="handleChange($event.target.value)"
                    :value="value"
                >
                    <option value="">Select One</option>
                    <slot></slot>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    model: {
        event: 'change'
    },
    props: {
        label: {
            type: String
        },
        value: {
            type: String
        }
    },
    methods: {
        handleChange(val) {
            this.$emit('change', val)
        }
    }
}
</script>

<style lang="scss">
</style>
