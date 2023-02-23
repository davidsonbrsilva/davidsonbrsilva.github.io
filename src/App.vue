<script setup lang="ts">
import AboutMe from '@views/AboutMe.vue';
import Portfolio from '@views/Pages/Portfolio.vue';
import Page from '@views/Page.vue';

import { ref } from 'vue';

const isAboutMeSectionOpen = ref(false);
const hitAboutMeButton = ref(false);

const handleAboutMeButton = () => {
  isAboutMeSectionOpen.value = true;
  hitAboutMeButton.value = true;
};
</script>

<template>
  <div class="container">
    <AboutMe
      :is-open="isAboutMeSectionOpen"
      :is-animation-enabled="hitAboutMeButton"
      @close="isAboutMeSectionOpen = false"
    />
    <Page @click-about-me="handleAboutMeButton">
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
  background-color: var(--color-background);
}

h1 {
  font: var(--text-title);
  color: var(--color-text-brand);
}

h2 {
  font: var(--text-subtitle);
  color: var(--color-text-normal);
}

h3 {
  font: var(--text-section-title);
  color: var(--color-text-brand);
  padding-bottom: 1rem;
}

h4 {
  font: var(--text-section-title);
  color: var(--color-text-normal);
  padding-bottom: 1rem;
}

p {
  font: var(--text-base);
  color: var(--color-text-normal);
}

li {
  font: var(--text-label);
  color: var(--color-text-normal);
}

a {
  font: var(--text-link);
  color: var(--color-text-brand);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
