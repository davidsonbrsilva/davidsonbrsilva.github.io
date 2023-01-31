<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { languages } from '../locale';

const i18n = useI18n();

const isMenuOpen = ref(false);

const changeLocale = (locale: string) => {
  i18n.locale.value = locale;
  isMenuOpen.value = false;
};
</script>

<template>
  <button class="button-language" :class="{ active: isMenuOpen }" type="button" @click="isMenuOpen = !isMenuOpen">
    <i class="material-symbols-outlined">translate</i>{{ $t('header.chooseALanguageButton') }}
  </button>
  <menu class="menu" v-if="isMenuOpen">
    <li v-for="locale in $i18n.availableLocales">
      <button type="button" @click="changeLocale(locale)">
        {{ languages[locale as keyof typeof languages] }}
      </button>
    </li>
  </menu>
</template>

<style lang="scss" scoped>
.button-language {
  font-size: 0;
  padding: 0.5rem;
  border-radius: 50%;
  outline: none;
  border: none;
  color: $button-text-secondary-normal;
  background: transparent;
  cursor: pointer;
  margin-left: 1rem;

  &:hover {
    color: $button-text-secondary-hover;
  }

  &.active {
    color: $button-text-secondary-active;
  }
}

.menu {
  background-color: $background-color-elevation;
  border-radius: 0.5rem;
  position: absolute;
  top: 36px;
  right: 0;
  padding: 0.5rem 0;
  overflow: hidden;
  @include shadow;

  li {
    list-style: none;
  }

  button {
    width: 100%;
    text-align: left;
    padding: 0.5rem 1rem;
    background: transparent;
    outline: none;
    border: none;
    color: $button-text-secondary-normal;

    &:hover {
      background-color: $button-background-secondary-hover;
    }
  }
}
</style>
