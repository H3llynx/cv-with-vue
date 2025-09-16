<script setup>
import { useTheme } from '../assets/themeChecker'
import ThemeIcon from '../components/icons/ThemeIcon.vue'

const { theme, setTheme } = useTheme()

function switchTheme() {
  setTheme(theme.value === 'dark' ? 'light' : 'dark')
}
</script>

<template>
  <button tabindex="0" @click="switchTheme">
    <i>
      <ThemeIcon />
    </i>
  </button>
</template>

<style>
button {
  border: 0;
  padding: 0.4rem;
  background: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--color-heading);
  -webkit-text-fill-color: var(--color-heading);
  transition: 0.6s;

  &:hover {
    transform: scale(1.2);
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
