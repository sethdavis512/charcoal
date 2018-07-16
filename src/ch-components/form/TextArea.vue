<template>
    <div class="field">
        <label class="label">
            {{ label }}
        </label>
        <div class="control">
            <textarea
                :placeholder="placeholder"
                :value="value"
                @input="handleChange($event.target.value)"
                class="textarea"
            >
            </textarea>
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
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            default: 'Enter text'
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
