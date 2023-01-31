<script setup lang="ts">
import Header from '@components/Header.vue';
import Footer from '@components/Footer.vue';

import Homepage from '@views/Homepage.vue';
</script>

<template>
  <div class="light">
    <Header />
    <Homepage />
    <Footer />
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
}

p {
  font: $text-base;
}

button {
  font: $text-button;
  cursor: pointer;
}

a {
  font: $text-button;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
}
</style>
