<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HeaderProfile from './components/HeaderProfile.vue';
import SkillSection from './components/SkillSection.vue';
import ThemeSelector from './components/ThemeSelector.vue';
</script>

<template>
  <header>
    <div class="banner">
      <img alt="Hélène" src="@/assets/banner.jpg" class="profil" />

      <nav>
        <RouterLink to="/cv/en">English</RouterLink>
        <RouterLink to="/cv/es">Español</RouterLink>
        <RouterLink to="/cv/fr">Français</RouterLink>
        <ThemeSelector />
      </nav>
    </div>
    <HeaderProfile />
    <SkillSection />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  padding: 1rem;
  width: 100%;
  line-height: 1.5;
  max-height: 100vh;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
  animation: fade-in 0.9s linear forwards;
  z-index: 1;
}

header::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

header::-webkit-scrollbar-thumb {
  background: transparent;
}

.banner {
  position: relative;
}

.profil {
  display: block;
  width: 100%;
  border-radius: 1.2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}

nav {
  width: 100%;
  padding: 0.2rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  background: var(--bg-rgb);
  border-bottom-left-radius: 1.2rem;
  border-bottom-right-radius: 1.2rem;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  -webkit-text-fill-color: var(--color-text);
  background-image: none;
}


nav a.router-link-exact-active:hover {
  background-color: transparent;
  border-color: transparent;
}

nav a {
  margin: 0 0.3rem;
  display: inline-block;
  padding: 0.3rem 1.2rem;
  font-weight: 500;
  font-size: 0.9rem;
}

@media (max-width: 1023px) {
  header {
    padding: 0;
    max-height: unset;
    position: relative;
  }

  .profil {
    border-radius: 0;
    width: 100%;
    min-height: 300px;
    object-fit: cover;
    overflow: hidden;
  }

  nav {
    border-radius: 0;
    position: fixed;
    top: 0;
    bottom: auto;
    z-index: 2;
    justify-content: space-around;
  }

  nav a {
    font-size: 1rem;
    padding: 0.3rem 0.8rem;
  }
}
</style>
