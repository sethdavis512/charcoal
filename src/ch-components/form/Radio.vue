<template>
    <div class="field">
        <p class="control">
            <label class="radio">
                <input
                    :checked="isChecked"
                    :value="value"
                    @change="handleChange"
                    type="radio"
                />
                {{ label }}
            </label>
        </p>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'modelValue',
        event: 'change'
    },
    props: {
        label: {
            type: String,
            required: true
        },
        modelValue: {
            type: String,
            default: ''
        },
        value: {
            type: String
        }
    },
    computed: {
        isChecked() {
            return this.modelValue === this.value
        }
    },
    methods: {
        handleChange() {
            this.$emit('change', this.value)
        }
    }
}
</script>

<style lang="scss">
label {
    cursor: pointer;
}
</style>
