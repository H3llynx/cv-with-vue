<template>
  <div class="card-outer-box">
    <div class="card-inner-box">
      <h1>
        <slot name="heading"></slot>
      </h1>
      <div class="flex-row top">
        <slot name="tags"></slot>
      </div>
      <div class="blob"></div>
      <div class="flex-row bottom">
        <slot name="bottom"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes blob-float {
  0% {
    border-radius: 59% 41% 60% 40% / 47% 51% 49% 53%;
    scale: 1;
  }

  25% {
    border-radius: 50% 50% 48% 52% / 58% 40% 60% 42%;
    scale: 0.88;
  }

  50% {
    border-radius: 63% 37% 59% 41% / 40% 28% 72% 60%;
    scale: 0.97;
  }

  75% {
    border-radius: 37% 63% 31% 69% / 66% 43% 57% 34%;
    scale: 1.09;
  }

  100% {
    border-radius: 59% 41% 60% 40% / 47% 51% 49% 53%;
    scale: 1;
  }
}

.blob {
  width: 90px;
  aspect-ratio: 5 / 4;
  background: var(--blob-gradient);
  animation: blob-float 8s linear infinite;
  position: absolute;
  right: -10px;
  bottom: -15px;
  transition: 0.6s ease;
  z-index: 0;
}

.card-inner-box {
  padding: 0.8rem 1.5rem;
}

.certification>*:not(.blob) {
  position: relative;
  z-index: 1;
}

h1 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-heading);
}

.flex-row {
  display: flex;
  margin-top: 1rem;
  align-items: flex-end;
  flex-flow: row wrap;
}

.top {
  margin-bottom: auto;
  justify-content: flex-start;
  gap: 0.2rem;
}

.bottom {
  justify-content: space-between;
  font-size: 1.2rem;
  color: var(--color-background);
  -webkit-text-fill-color: var(--color-background);
  position: relative;
  z-index: 1;
}
</style>
