<template>
  <div class="info">
    <h1 class="name">Hélène Teychené</h1>
    <h2>Front End Developer | UX Designer</h2>
    <ul class="contact">
      <li><i class="fa-brands fa-linkedin-in"></i><a href="https://www.linkedin.com/in/helene-tch/"
          target="_blank">Contact
          me on LinkedIn</a>
      </li>
      <li>
        <i class="fa-solid fa-envelope"></i><a href="mailto:helenetrafficker@gmail.com">Email me</a>
      </li>
      <li>
        <i class="fa-solid fa-location-dot"></i><span>Barcelona, Spain</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.info {
  padding: 1.2rem;
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

.contact a,
.contact span {
  padding: 0.4rem 0.8rem;
}

@media only screen and (max-width: 600px) {
  .contact {
    flex-direction: column;
  }

  .info {
    padding: 1.2rem 1rem;
  }
}
</style>
