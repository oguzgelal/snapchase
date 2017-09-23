<template>
    <f7-page>
        <f7-block-title>Welcome to Snapchase</f7-block-title>
        <f7-list>
            <f7-list-item>
                <f7-link href="/about/">About</f7-link>
            </f7-list-item>
            <f7-list-item>
                <f7-link v-on:click="signIn">Login with Facebook</f7-link>
            </f7-list-item>
        </f7-list>
    </f7-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import store from '../../store';

export default {
    data() {
        return {
            loading: true
        }
    },
    methods: {
        ...mapActions('auth', [
            'signIn'
        ])
    }
}
</script>
