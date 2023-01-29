<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { languages } from "../locale";

const i18n = useI18n();

const isMenuOpen = ref(false);

const changeLocale = (locale: string) => {
  i18n.locale.value = locale;
  isMenuOpen.value = false;
};
</script>

<template>
  <header>
    <button type="button">{{ $t("header.aboutMeButton") }}</button>
    <button type="button">{{ $t("header.switchToDarkModeButton") }}</button>
    <button type="button" @click="isMenuOpen = !isMenuOpen">
      {{ $t("header.chooseALanguageButton") }}
    </button>
    <menu v-if="isMenuOpen">
      <li v-for="locale in $i18n.availableLocales">
        <button type="button" @click="changeLocale(locale)">
          {{ languages[locale as keyof typeof languages] }}
        </button>
      </li>
    </menu>
  </header>
</template>
