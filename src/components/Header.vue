<script setup lang="ts">
import AboutMeButton from './AboutMeButton.vue';
import LanguageButton from './LanguageButton.vue';
import ThemeModeButton from './ThemeModeButton.vue';
</script>

<template>
  <header class="header">
    <AboutMeButton />
    <nav class="nav">
      <ThemeModeButton />
      <LanguageButton />
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav {
  position: relative;
  display: flex;
  align-items: center;
}
</style>
