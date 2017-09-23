<template>
    <f7-popup id="settings-popup">
        <f7-view id="settings-view" navbar-fixed uniqueHistory tab>
            <f7-pages>
                <home></home>
            </f7-pages>
        </f7-view>
    </f7-popup>
</template>

<script>
import Home from './home.vue'

export default {
    components: {
        'home': Home
    }
}
</script>

