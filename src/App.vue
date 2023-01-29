<script setup lang="ts">
import Header from "@components/Header.vue";
import Footer from "@components/Footer.vue";

import Homepage from "@views/Homepage.vue";
</script>

<template>
  <div class="light">
    <Header />
    <Homepage />
    <Footer />
  </div>
</template>

<style>
/* .light {
  background-color: #eeeeee;
  width: 100vw;
  height: 100vh;
} */

:root {
  --font-base: "Inter", sans-serif;
  --dark-10: #1a1a1a;
  --dark-15: #262626;
  --dark-20: #333333;
  --dark-25: #404040;
  --light-79: #c9c9c9;
  --light-86: #dbdbdb;
  --light-93: #ededed;
  --light-100: #ffffff;
  --accent-dark: #e59900;
  --accent-normal: #ffaa00;
  --accent-light: #ffbf40;

  --main-background: var(--dark-10)
  --aside-background: var(--accent-light)
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
    background-color: var(--dark-10);
}

p {
    font-family: 'Inter',sans-serif;
    line-height: 1.7;
}
</style>
