<template>
    <div class="form-container">
        <ch-notification
            @dismiss="dismissNotification"
            :class="isSuccessful ? 'is-success' : 'is-danger'"
            v-show="isSuccessful || isFailure"
        >
            {{ isSuccessful ? successMsg : failureMsg }}
        </ch-notification>
        <form @submit.prevent="submitForm">
            <slot></slot>
        </form>
    </div>
</template>

<script>
import ChNotification from '@/ch-components/elements/Notification.vue'

import { isEmpty } from 'lodash/isEmpty'

export default {
    props: {
        failureMsg: {
            type: String,
            default: 'Failure.'
        },
        method: {
            type: String,
            default: 'POST'
        },
        payload: {
            type: Object,
            required: true,
            default: {}
        },
        successMsg: {
            type: String,
            default: 'Success!'
        },
        url: {
            type: String,
            required: true,
            default: 'http://your-api.com/'
        }
    },
    data() {
        return {
            err: {},
            res: {}
        }
    },
    components: {
        ChNotification
    },
    computed: {
        isFailure() {
            if (this.err) {
                const { status } = this.err
                return status > 400 && status < 499
            }

            return false
        },
        isSuccessful() {
            const { status } = this.res
            return status > 200 && status < 299
        }
    },
    methods: {
        dismissNotification() {
            this.err = {}
            this.res = {}
        },
        submitForm() {
            this.$http(this.url, {
                data: this.payload,
                method: this.method
            })
                .then(res => {
                    this.res = res
                })
                .catch(err => {
                    this.err = err.response
                })
        }
    }
}
</script>

<style lang="scss">
</style>
