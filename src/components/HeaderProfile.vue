<template>
  <div class="info">
    <h1 class="name">Hélène Teychené</h1>
    <h2>Front End Developer | UX Designer</h2>
    <ul class="contact">
      <li><a href="https://github.com/H3llynx" target="_blank" tabindex="0" aria-label="github"><i
            class="fa-brands fa-github"></i></a>
      </li>
      <li><a href="https://www.linkedin.com/in/helene-tch/" target="_blank" tabindex="0" aria-label="LinkedIn"><i
            class="fa-brands fa-linkedin-in"></i></a>
      </li>
      <li>
        <a href="mailto:helenetrafficker@gmail.com" tabindex="0" aria-label="Email">
          <i class="fa-solid fa-envelope"></i></a>
      </li>
      <li>
        <i class="fa-solid fa-location-dot"></i><span>Barcelona</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.info {
  padding: 1.2rem;
}

.info a {
  color: var(--color-heading);
  -webkit-text-fill-color: var(--color-heading);
  font-size: 1.1rem;
  border: 0;
}

.info i:not(.fa-location-dot) {
  margin: 0;
}

.info a:hover,
.info a:focus-visible {
  border: 0;
  font-size: 1.4rem;
}

h2 {
  text-align: center;
}

.contact {
  list-style: none;
  padding: 2rem 1.2rem 0 1.2rem;
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
  flex-flow: row wrap;
}

.contact li {
  padding: 0.6rem;
}
</style>
