<template>
    <f7-view id="game-view" navbar-fixed uniqueHistory tab>
        <f7-pages>
            <home></home>
        </f7-pages>
    </f7-view>
</template>

<script>
import Home from './home.vue'

export default {
    components: {
        'home': Home
    }
}
</script>

