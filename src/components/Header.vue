<script setup lang="ts">
import { languages } from "../locale";
</script>

<template>
  <header>
    <button type="button">{{ $t("title") }}</button>
    <button type="button">Dark Mode</button>
    <button type="button">Language</button>
    <menu>
      <li v-for="locale in $i18n.availableLocales">
        <button type="button" @click="() => ($i18n.locale = locale)">
          {{ languages[locale as keyof typeof languages] }}
        </button>
      </li>
    </menu>
  </header>
</template>
