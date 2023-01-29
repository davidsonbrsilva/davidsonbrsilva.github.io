<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { languages } from "../locale";
import AboutMeButton from "./AboutMeButton.vue";
import ThemeModeButton from "./ThemeModeButton.vue";

const i18n = useI18n();

const isMenuOpen = ref(false);

const changeLocale = (locale: string) => {
  i18n.locale.value = locale;
  isMenuOpen.value = false;
};
</script>

<template>
  <header class="header">
    <AboutMeButton />
    <nav class="nav">
      <ThemeModeButton />
      <button
        class="language"
        :class="{ active: isMenuOpen }"
        type="button"
        @click="isMenuOpen = !isMenuOpen"
      >
        <i class="material-symbols-outlined">translate</i
        >{{ $t("header.chooseALanguageButton") }}
      </button>
      <menu class="menu" v-if="isMenuOpen">
        <li v-for="locale in $i18n.availableLocales">
          <button type="button" @click="changeLocale(locale)">
            {{ languages[locale as keyof typeof languages] }}
          </button>
        </li>
      </menu>
    </nav>
  </header>
</template>

<style scoped>
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

.language {
  font-size: 0;
  padding: 0.5rem;
  border-radius: 50%;
  outline: none;
  border: none;
  color: #c9c9c9;
  background: transparent;
  cursor: pointer;
  margin-left: 1rem;
}

.language:hover {
  color: white;
}

.language.active {
  color: #ffaa00;
}

.menu {
  background-color: #262626;
  border-radius: 0.5rem;
  position: absolute;
  top: 36px;
  right: 0;
  padding: 0.5rem 0;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.menu li {
  list-style: none;
}

.menu button {
  width: 100%;
  text-align: left;
  padding: 0.5rem 1rem;
  background: transparent;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
}

.menu button:hover {
  background-color: #1a1a1a;
}
</style>
