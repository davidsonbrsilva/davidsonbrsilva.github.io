<script lang="ts" setup>
import { onMounted, ref } from 'vue';
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
const bodyElement = ref<HTMLBodyElement | null>(null);
const translateMenuElement = ref<InstanceType<typeof Menu> | null>(null);
const translateMenuButtonElement = ref<InstanceType<typeof MenuButton> | null>(null);
const nav = ref(null);

onMounted(() => {
  bodyElement.value = document.getElementsByTagName('body')[0];

  window.addEventListener('click', (event) => {
    const hasClickedOnTranslateMenu = (translateMenuElement.value?.root as any as Node).contains(event.target as Node);
    const hasClickedOnTranslateMenuButton = (translateMenuButtonElement.value?.root as any as Node).contains(
      event.target as Node
    );

    if (!hasClickedOnTranslateMenu && !hasClickedOnTranslateMenuButton) {
      isTranslateMenuOpen.value = false;
    }
  });
});

const changeLocale = (locale: string) => {
  i18n.locale.value = locale;
  isTranslateMenuOpen.value = false;
};

const toggleTheme = () => {
  bodyElement.value?.classList.toggle('light-theme');
};
</script>

<template>
  <header>
    <Button icon-default="sentiment_satisfied" icon-hover="mood" @click="$emit('clickAboutMe')">
      {{ $t('header.aboutMe') }}
    </Button>
    <nav ref="nav">
      <MenuButton
        label-name="Teste"
        icon-name="translate"
        is-label-hidden
        :is-active="isTranslateMenuOpen"
        @toggle="isTranslateMenuOpen = !isTranslateMenuOpen"
        ref="translateMenuButtonElement"
      >
        <Menu v-show="isTranslateMenuOpen" ref="translateMenuElement">
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
        @click="toggleTheme"
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
  flex-wrap: wrap;

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
