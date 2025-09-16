<script setup>
import { computed, getCurrentInstance } from 'vue';
import { useTheme } from '../assets/themeChecker';

const { theme } = useTheme()

const themeLight = computed(() => theme.value === 'light')

const props = defineProps({
    progress: { type: Number, required: true },
    size: { type: Number, default: 70 },
    stroke: { type: Number, default: 8 },
    iconName: { type: String, required: true },
    label: { type: String, required: true }
});

const radius = computed(() => (props.size - props.stroke) / 2);
const center = computed(() => props.size / 2);
const circumference = computed(() => 2 * Math.PI * radius.value);
const dashOffset = computed(
    () => circumference.value - (props.progress / 100) * circumference.value
);

const instance = getCurrentInstance();
const gradientId = `grad-${instance.uid}`;
</script>

<template>
    <div class="progress-circle" :aria-label="`${label} skill at ${progress}%`" role="img">
        <svg :width="size" :height="size" class="circular-progress">
            <defs>
                <linearGradient :id="gradientId" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"
                        :stop-color="themeLight ? 'var(--gradient-stop1-light)' : 'var(--gradient-stop1-dark)'" />
                    <stop offset="50%"
                        :stop-color="themeLight ? 'var(--gradient-stop2-light)' : 'var(--gradient-stop2-dark)'" />
                    <stop offset="100%"
                        :stop-color="themeLight ? 'var(--gradient-stop3-light)' : 'var(--gradient-stop3-dark)'" />
                </linearGradient>
            </defs>

            <!-- Background -->
            <circle :cx="center" :cy="center" :r="radius"
                :stroke="themeLight ? 'var(--bg-svg-light)' : 'var(--bg-svg-dark)'" :stroke-width="stroke"
                fill="none" />

            <!-- Progress -->
            <circle :cx="center" :cy="center" :r="radius" :stroke="`url(#${gradientId})`" :stroke-width="stroke"
                fill="none" stroke-linecap="round" :stroke-dasharray="circumference" :stroke-dashoffset="dashOffset"
                :transform="`rotate(-90 ${center} ${center})`" />
        </svg>

        <div class="progress-label">
            <ion-icon :name="iconName" aria-hidden="true"></ion-icon>
        </div>
    </div>
</template>


<style scoped>
.progress-circle {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    z-index: 0;
}

.circular-progress {
    transform: rotate(0deg);
}

.progress-label {
    position: absolute;
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    justify-content: flex-start;
}
</style>
