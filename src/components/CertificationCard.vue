<template>
  <div class="outer-box" tabindex="0">
    <div class="certification">
      <h1>
        <slot name="heading"></slot>
      </h1>
      <div class="flex-row top">
        <slot name="tags"></slot>
      </div>
      <div class="flex-row">
        <slot name="bottom"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.outer-box {
  padding: 1px;
  border-radius: 0.6rem;
  animation: var(--main-background-animation);
  background: var(--main-gradient);
  background-size: var(--main-gradient-size);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}

.certification {
  background: var(--color-background);
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.8rem 1.5rem;
  height: 100%;
}

h1 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-heading);
}

.flex-row {
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
  align-items: flex-end;
  flex-flow: row wrap;
}

.top {
  margin-bottom: auto;
  justify-content: flex-start;
  gap: 0.2rem;
}
</style>
