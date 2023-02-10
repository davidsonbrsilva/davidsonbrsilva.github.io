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
  background-color: $background-color-base;
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
