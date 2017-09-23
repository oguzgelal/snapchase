<template>
	<f7-page>
		<f7-navbar title="Snapchase"></f7-navbar>
		<f7-block-title>Navigation</f7-block-title>
		<f7-list>
			<f7-list-item>
				<f7-link href="/settings/" open-popup="#settings-popup" view="#settings-view" :animate-pages="false">Settings</f7-link>
			</f7-list-item>
			<f7-list-item>
				<f7-link href="/home/" tab-link="#public-view">Logout</f7-link>
			</f7-list-item>
		</f7-list>

	</f7-page>
</template>

<script>
export default {}
</script>
