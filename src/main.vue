<template>
	<!-- App -->
	<div id="app">

		<!-- Statusbar -->
		<f7-statusbar layout="dark"></f7-statusbar>

		<!-- Views -->
		<f7-views tabs>
			<public-view></public-view>
			<game-view></game-view>
		</f7-views>

		<!-- Popup Views -->
		<settings-view></settings-view>

	</div>
</template>

<script>
import route from './routes.js';
import PublicView from './pages/public/base.vue';
import GameView from './pages/game/base.vue';
import SettingsView from './pages/settings/base.vue';

export default {
	mounted() {
		console.log('routes: ', route);
	},
	components: {
		'public-view': PublicView,
		'game-view': GameView,
		'settings-view': SettingsView
	}
}
</script>
