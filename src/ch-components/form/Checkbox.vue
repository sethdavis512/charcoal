<template>
    <div class="field">
        <div class="control">
            <label class="checkbox">
                <input
                    :checked="isChecked"
                    :value="value"
                    @change="handleChange"
                    type="checkbox"
                />
                <slot name="icon"></slot>
                {{ label }}
            </label>
        </div>
    </div>
</template>

<script>
export default {
    model: {
        event: 'change',
        prop: 'modelValue'
    },
    props: {
        falseValue: {
            default: false
        },
        label: {
            type: String,
            required: true
        },
        modelValue: {
            default: false
        },
        trueValue: {
            default: true
        },
        value: {
            type: String
        }
    },
    computed: {
        isChecked() {
            if (this.modelValue instanceof Array) {
                return this.modelValue.includes(this.value)
            }

            return this.modelValue === this.trueValue
        }
    },
    methods: {
        handleChange(e) {
            const checked = e.target.checked

            if (this.modelValue instanceof Array) {
                const modelArr = [...this.modelValue]

                if (checked) {
                    modelArr.push(this.value)
                } else {
                    modelArr.splice(modelArr.indexOf(this.value), 1)
                }

                this.$emit('change', modelArr)
            } else {
                this.$emit('change', checked ? this.trueValue : this.falseValue)
            }
        }
    }
}
</script>

<style lang="scss">
label {
    cursor: pointer;
}
</style>
