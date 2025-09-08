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
        <i class="fa-solid fa-location-dot"></i>Barcelona, Spain
      </li>
    </ul>
    <div id="icons-section">
      <div class="icons">
        <ion-icon name="logo-html5"></ion-icon>
        <div class="wrapper">
          <div class="bar html"></div>
        </div>
      </div>
      <div class="icons">
        <ion-icon name="logo-css3"></ion-icon>
        <div class="wrapper">
          <div class="bar css"></div>
        </div>
      </div>
      <div class="icons">
        <ion-icon name="logo-javascript"></ion-icon>
        <div class="wrapper">
          <div class="bar js"></div>
        </div>
      </div>
      <div class="icons">
        <ion-icon name="logo-wordpress"></ion-icon>
        <div class="wrapper">
          <div class="bar wp"></div>
        </div>
      </div>
      <div class="icons">
        <ion-icon name="logo-vue"></ion-icon>
        <div class="wrapper">
          <div class="bar vue"></div>
        </div>
      </div>
      <div class="icons">
        <ion-icon name="logo-figma"></ion-icon>
        <div class="wrapper">
          <div class="bar figma"></div>
        </div>
      </div>
      <div class="icons">
        <ion-icon name="logo-python"></ion-icon>
        <div class="wrapper">
          <div class="bar python"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: clamp(2rem, 4vw, 2.6rem);
  position: relative;
}

h3 {
  font-size: 1.2rem;
}

.contact {
  list-style: none;
  padding: 1.2rem 0;
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
}

#icons-section {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.icons {
  font-size: 2rem;
  color: var(--skills);
  display: flex;
  height: 2.2rem;
  justify-content: flex-start;
  align-items: center;
}

.wrapper {
  border: 1px solid var(--skills);
  width: 150px;
  height: 8px;
  margin-left: 5px;
  border-radius: 5px;
  transition: 0.8s;
}

.bar {
  transition: 1.5s;
  height: 100%;
  background: var(--main-gradient);
  background-size: var(--main-gradient-size);
  animation: colors 5s ease-in-out infinite;
}

.html {
  width: 95%;
}

.css {
  width: 90%;
}

.js {
  width: 60%;
}

.wp {
  width: 65%;
}

.vue {
  width: 60%;
}

.figma {
  width: 60%;
}

.python {
  width: 20%;
}

@media only screen and (max-width: 460px) {
  .contact {
    flex-direction: column;
  }
}
</style>
