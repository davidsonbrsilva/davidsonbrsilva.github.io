<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

import { languages } from '@locale/index';

import Button from '@components/Button.vue';
import MenuButton from '@components/MenuButton.vue';
import Menu from '@components/Menu.vue';
import Toggle from '@components/Toggle.vue';
import MenuItem from '@components/MenuItem.vue';

import socials from '@utils/socials';

const i18n = useI18n();

const isTranslateMenuOpen = ref(false);

const changeLocale = (locale: string) => {
  i18n.locale.value = locale;
};
</script>

<template>
  <header>
    <Button icon-default="sentiment_satisfied" icon-hover="mood">{{ $t('header.aboutMe') }}</Button>
    <nav>
      <MenuButton
        label-name="Teste"
        icon-name="translate"
        is-label-hidden
        :is-active="isTranslateMenuOpen"
        @toggle="isTranslateMenuOpen = !isTranslateMenuOpen"
      >
        <Menu v-show="isTranslateMenuOpen">
          <MenuItem
            v-for="locale in $i18n.availableLocales"
            :label-name="languages[locale as keyof typeof languages]"
            @click="() => changeLocale(locale)"
          />
        </Menu>
      </MenuButton>

      <Toggle
        icon-on="dark_mode"
        icon-off="light_mode"
        help-text-on="{{ $t('header.switchToLightMode') }}"
        help-text-off="{{ $t('header.switchToDarkMode') }}"
      />
    </nav>
  </header>

  <main class="main">
    <slot></slot>
  </main>

  <footer class="footer">
    <p>&copy {{ new Date().getFullYear() }} Davidson Bruno</p>
    <ul class="social-links">
      <li v-for="social in socials">
        <a :href="social.url" target="_blank">{{ social.label }}</a>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
header,
main,
footer {
  padding: 1rem;
}

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

footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 1rem;

  p {
    font: $text-label;
  }
}

.social-links {
  display: flex;

  li {
    list-style: none;

    &:after {
      content: '|';
      padding: 0 0.5rem;
      color: $border-color-normal;
    }

    &:last-child {
      &:after {
        content: '';
      }
    }
  }

  a {
    color: $text-color-base;
  }
}
</style>
