<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

import { languages } from '@locale';

import Button from '@components/Button.vue';
import MenuButton from '@components/MenuButton.vue';
import Menu from '@components/Menu.vue';
import Toggle from '@components/Toggle.vue';
import MenuItem from '@components/MenuItem.vue';

const i18n = useI18n();

const isTranslateMenuOpen = ref(false);

const changeLocale = (locale: string) => {
  i18n.locale.value = locale;
};
</script>

<template>
  <header>
    <Button icon-default="sentiment_satisfied" icon-hover="mood">{{ $t('header.aboutMeButton') }} </Button>
    <nav>
      <MenuButton
        label-name="Teste"
        icon-name="translate"
        hide-label
        :is-menu-open="isTranslateMenuOpen"
        @toggle-menu="isTranslateMenuOpen = !isTranslateMenuOpen"
      >
        <Menu v-show="isTranslateMenuOpen">
          <MenuItem
            v-for="locale in $i18n.availableLocales"
            :label-name="languages[locale as keyof typeof languages]"
            :on-click="() => changeLocale(locale)"
          />
        </Menu>
      </MenuButton>

      <Toggle
        icon-on="dark_mode"
        icon-off="light_mode"
        help-text-on="{{ $t('header.switchToLightModeButton') }}"
        help-text-off="{{ $t('header.switchToDarkModeButton') }}"
      />
    </nav>
  </header>

  <main class="main"><slot></slot></main>

  <footer class="footer"></footer>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;

  nav {
    display: flex;
    align-items: center;
    column-gap: 0.25rem;
  }
}

header,
main,
footer {
  padding: 1rem;
}
</style>
