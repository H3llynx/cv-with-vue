import { ref } from 'vue'

const theme = ref(localStorage.getItem('theme') || getSystemPreference())

function getSystemPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function setTheme(newTheme) {
    theme.value = newTheme
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme)
}

export function useTheme() {
    return { theme, setTheme }
}

applyTheme(theme.value)
