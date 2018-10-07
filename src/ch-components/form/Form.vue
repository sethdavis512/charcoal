<template>
    <div class="form-container">
        <ch-notification
            @dismiss="dismissNotification"
            class="is-success"
            v-show="isVisible && isSuccessful"
        >
            {{ successMsg }}
        </ch-notification>
        <ch-notification
            @dismiss="dismissNotification"
            class="is-danger"
            v-show="isVisible && isFailure"
        >
            {{ failureMsg }}
        </ch-notification>
        <form @submit.prevent="submitForm">
            <slot></slot>
        </form>
    </div>
</template>

<script>
import ChNotification from '../elements/Notification'

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
            required: true
        },
        successMsg: {
            type: String,
            default: 'Success!'
        },
        url: {
            type: String,
            required: true
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
            const { status } = this.err
            return status > 400 && status < 499
        },
        isSuccessful() {
            const { status } = this.res
            return status > 200 && status < 299
        },
        isVisible() {
            return !isEmpty(this.err) || !isEmpty(this.res)
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
