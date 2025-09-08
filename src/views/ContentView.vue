<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { english, french, spanish } from '../assets/curriculum.js';
import CvElement from '../components/CurriculumVitae.vue';

const route = useRoute();
const cv = computed(() => {
  if (route.params.lang === 'en') { return english }
  else if (route.params.lang === 'es') { return spanish }
  else { return french };
}
);

</script>

<template>
  <main>
    <div class="cv">
      <CvElement :cv="cv" />
    </div>
  </main>
</template>

<style>
.cv {
  padding: 1.2rem 0;
}
</style>
