<template>
    <f7-view id="public-view" uniqueHistory main tab active>
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
