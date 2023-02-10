<script setup lang="ts">
import AboutMe from '@views/AboutMe.vue';
import Portfolio from '@views/Pages/Portfolio.vue';
import Page from '@views/Page.vue';

import { ref } from 'vue';

const isAboutMeSectionClosed = ref(true);
</script>

<template>
  <div class="container">
    <AboutMe :is-closed="isAboutMeSectionClosed" @close="isAboutMeSectionClosed = true" />
    <Page @click-about-me="isAboutMeSectionClosed = false">
      <Portfolio />
    </Page>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

body {
  background-color: $background-color-base;
}

img {
  max-width: 100%;
}

h1 {
  font: $text-title;
  color: $text-color-highlight;
}

h2 {
  font: $text-subtitle;
  color: $text-color-base;
}

h3 {
  font: $text-section-title;
  color: $text-color-highlight;
  padding-bottom: 1rem;
}

h4 {
  font: $text-section-title;
  color: $text-color-base;
  padding-bottom: 1rem;
}

p {
  font: $text-base;
  color: $text-color-base;
}

a {
  font: $text-link;
  color: $text-color-highlight;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
}
</style>
