<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HeaderProfile from './components/HeaderProfile.vue';
import ThemeSelector from './components/ThemeSelector.vue';
</script>

<template>
  <header>
    <div class="banner">
      <img alt="Hélène" src="@/assets/banner.jpg" class="profil" />
      <ThemeSelector />
    </div>
    <div class="h-wrapper">
      <HeaderProfile />
    </div>
    <nav>
      <RouterLink to="/cv/en">English</RouterLink>
      <RouterLink to="/cv/es">Español</RouterLink>
      <RouterLink to="/cv/fr">Français</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

header {
  padding: 1rem;
  width: 100%;
  line-height: 1.5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.h-wrapper {
  padding: 1.2rem;
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
  font-size: 1rem;
  text-align: center;
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
}

@media (max-width: 1023px) {
  header {
    padding: 0;
    min-height: unset;
  }

  .profil {
    border-radius: 0;
  }

  nav {
    padding-top: 3rem;
  }

}
</style>
