<script setup>
import ProgressCircle from "@/components/ProgressCircle.vue";
</script>

<template>
    <div id="icons-section">
        <ProgressCircle :progress="100" iconName="logo-html5" label="HTML" />
        <ProgressCircle :progress="90" iconName="logo-css3" label="CSS" />
        <ProgressCircle :progress="60" iconName="logo-javascript" label="Javascript" />
        <ProgressCircle :progress="65" iconName="logo-wordpress" label="Wordpress" />
        <ProgressCircle :progress="60" iconName="logo-vue" label="Vue.js" />
        <ProgressCircle :progress="60" iconName="logo-figma" label="Figma" />
        <ProgressCircle :progress="20" iconName="logo-python" label="Python" />
    </div>
</template>

<style scoped>
#icons-section {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
}
</style>