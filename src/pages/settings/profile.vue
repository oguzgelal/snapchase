<template>
    <f7-page>
        <f7-navbar title="Profile" back-link="Back" sliding>
            <f7-nav-right>
                <f7-link text="Close" close-popup="#settings-popup"></f7-link>
            </f7-nav-right>
        </f7-navbar>

        <f7-list form>
            </f7-list-item>
            <!-- Text Input -->
            <f7-list-item>
                <f7-label>Name</f7-label>
                <f7-input type="text" placeholder="Name" />
            </f7-list-item>
            <!-- Switch -->
            <f7-list-item>
                <f7-label>Switch</f7-label>
                <f7-input type="switch" @change="onChange"></f7-input>
            </f7-list-item>
            <!-- Select -->
            <f7-list-item>
                <f7-label>Gender</f7-label>
                <f7-input type="select">
                    <option value="1">Male</option>
                    <option value="1">Female</option>
                </f7-input>
            </f7-list-item>
            <!-- Range -->
            <f7-list-item>
                <f7-label>Range</f7-label>
                <f7-input type="range" min="0" max="100" step="1" value="90"></f7-input>
            </f7-list-item>
        </f7-list>

    </f7-page>
</template>

<script>
export default {}
</script>
