<script setup>
import ProgressCircle from "@/components/ProgressCircle.vue";
</script>

<template>
  <div class="info">
    <h1 class="name">Hélène Teychené</h1>
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
    <div id="icons-section">
      <ProgressCircle :progress="100" iconName="logo-html5" label="HTML" />
      <ProgressCircle :progress="90" iconName="logo-css3" label="CSS" />
      <ProgressCircle :progress="60" iconName="logo-javascript" label="Javascript" />
      <ProgressCircle :progress="65" iconName="logo-wordpress" label="Wordpress" />
      <ProgressCircle :progress="60" iconName="logo-vue" label="Vue.js" />
      <ProgressCircle :progress="60" iconName="logo-figma" label="Figma" />
      <ProgressCircle :progress="20" iconName="logo-python" label="Python" />
    </div>
  </div>
</template>

<style scoped>
.info {
  padding: 1.2rem;
}

.contact {
  list-style: none;
  padding: 0.8rem 1.2rem;
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

#icons-section {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
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
