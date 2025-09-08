<script setup>
import { onMounted, ref, watch } from 'vue'
import ThemeIcon from '../components/icons/ThemeIcon.vue'

const theme = ref(localStorage.getItem('theme') || getSystemPreference())

function getSystemPreference() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

onMounted(() => {
  applyTheme(theme.value)
})

watch(theme, (newTheme) => {
  localStorage.setItem('theme', newTheme)
  applyTheme(newTheme)
})

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
}

function switchTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="button-wrapper">
    <button tabindex="0" @click="switchTheme">
      <i>
        <ThemeIcon />
      </i>Switch theme
    </button>
  </div>
</template>

<style>
.button-wrapper {
  position: absolute;
  top: 5%;
  right: 5%;
  background: var(--main-gradient);
  background-size: var(--main-gradient-size);
  animation: var(--main-background-animation);
  border-radius: 2rem;
  padding: 2px;
  z-index: 2;
  transition: 0.8s;

  &:hover {
    transform: rotate(2deg);
  }
}

button {
  border: 0;
  padding: 0.4rem 1.4rem;
  border-radius: 2rem;
  background: var(--color-background);
  color: var(--color-heading);
  font-family: "Raleway", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.02rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background: var(--icon-gradient);
    background-size: var(--main-gradient-size);
    animation: colors 2s infinite;
    border-radius: 2rem;
  }
}

i {
  margin-right: 6px;
}

@media (max-width: 1023px) {
  button:hover::after {
    display: none
  }
}
</style>
