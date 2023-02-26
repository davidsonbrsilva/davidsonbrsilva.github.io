<script lang="ts" setup>
import { onMounted, onUpdated, watch, ref, toRef } from 'vue';
import { useI18n } from 'vue-i18n';

import { languages } from '@locale/index';

import Button from '@components/Button.vue';
import MenuButton from '@components/MenuButton.vue';
import Menu from '@components/Menu.vue';
import Toggle from '@components/Toggle.vue';
import MenuItem from '@components/MenuItem.vue';

import socials from '@utils/socials';
import { getBrowserLocale } from '@utils/helpers';

const i18n = useI18n();
const emit = defineEmits(['clickAboutMe']);

const isLightTheme = ref(false);
const isTranslateMenuOpen = ref(false);
const mustHeaderBeOnTop = ref(false);

const bodyElement = ref<HTMLBodyElement | null>(null);
const translateMenuElement = ref<InstanceType<typeof Menu> | null>(null);
const translateMenuButtonElement = ref<InstanceType<typeof MenuButton> | null>(null);
const headerElement = ref<HTMLElement | null>(null);
const mainElement = ref<HTMLElement | null>(null);

const getTheme = () => localStorage.getItem('theme');

const getLanguage = () => {
  const locale = localStorage.getItem('locale') || getBrowserLocale();
  return locale ? locale : i18n.locale.value;
};

const getMediaPreference = () => (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

const registerHeaderEventOnScroll = () => {
  const aboutMeElement = document.getElementById('about-me');
  if (!aboutMeElement) return;

  window.addEventListener('scroll', () => {
    if (!headerElement.value) return;
    mustHeaderBeOnTop.value = document.documentElement.scrollTop > aboutMeElement.offsetHeight;
  });
};

const registerTranslateMenuEventOnClick = () => {
  window.addEventListener('click', (event) => {
    const hasClickedOnTranslateMenu = (translateMenuElement.value?.root as any as Node).contains(event.target as Node);
    const hasClickedOnTranslateMenuButton = (translateMenuButtonElement.value?.root as any as Node).contains(
      event.target as Node
    );

    if (!hasClickedOnTranslateMenu && !hasClickedOnTranslateMenuButton) {
      isTranslateMenuOpen.value = false;
    }
  });
};

const defineThemeOnStart = () => {
  bodyElement.value = document.getElementsByTagName('body')[0];
  const userTheme = getTheme() || getMediaPreference();

  if (userTheme === 'light') {
    bodyElement.value?.classList.add('light-theme');
    isLightTheme.value = true;
  }
};

const defineLanguageOnStart = () => {
  i18n.locale.value = getLanguage();
  document.documentElement.setAttribute('lang', i18n.locale.value);
};

const handleHeaderPosition = () => {
  if (mainElement.value && headerElement.value) {
    if (mustHeaderBeOnTop.value) {
      mainElement.value.style.marginTop = headerElement.value.offsetHeight + 'px';
      headerElement.value.style.position = 'fixed';
      headerElement.value.style.top = '0';
      return;
    }

    mainElement.value.style.marginTop = '0';
    headerElement.value.style.position = 'static';
  }
};

const changeLocale = (locale: string) => {
  i18n.locale.value = locale;
  isTranslateMenuOpen.value = false;
  localStorage.setItem('locale', locale);
  document.documentElement.setAttribute('lang', locale);
};

const toggleTheme = () => {
  bodyElement.value?.classList.toggle('light-theme');
  localStorage.setItem('theme', bodyElement.value?.classList.contains('light-theme') ? 'light' : 'dark');
};

onMounted(() => {
  defineThemeOnStart();
  defineLanguageOnStart();
  registerTranslateMenuEventOnClick();
  registerHeaderEventOnScroll();
});

watch(mustHeaderBeOnTop, () => handleHeaderPosition());
</script>

<template>
  <header ref="headerElement">
    <Button
      :label="$t('header.aboutMe')"
      icon-default="/icons/smile-icon.svg"
      icon-hover="/icons/happy-icon.svg"
      @click="emit('clickAboutMe')"
      :aria-label="$t('header.seeMoreInfoAboutDeveloper')"
    />
    <nav>
      <MenuButton
        :label-name="languages[$i18n.locale as keyof typeof languages]"
        icon-name="/icons/language-icon.svg"
        :is-active="isTranslateMenuOpen"
        @toggle="isTranslateMenuOpen = !isTranslateMenuOpen"
        ref="translateMenuButtonElement"
        :aria-label="$t('header.chooseALanguage')"
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
        :is-on="isLightTheme"
        icon-on="/icons/moon-icon.svg"
        icon-off="/icons/sun-icon.svg"
        :help-text-on="$t('header.switchToLightMode')"
        :help-text-off="$t('header.switchToDarkMode')"
        @click="toggleTheme"
      />
    </nav>
  </header>

  <main ref="mainElement">
    <slot></slot>
  </main>

  <footer>
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
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
  background-color: var(--color-background);
  z-index: 100;

  nav {
    display: flex;
    align-items: center;
    column-gap: 0.25rem;
  }
}

footer {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  column-gap: 1rem;

  p {
    font: var(--text-label);
    color: var(--color-text-disabled);
    padding-bottom: 0.5rem;
    text-align: center;
  }
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  li {
    list-style: none;

    &:after {
      content: '|';
      padding: 0 0.5rem;
      color: var(--color-border-normal);
    }

    &:last-child:after {
      content: '';
      padding: 0;
    }
  }

  a {
    font: var(--text-label);
    color: var(--color-text-normal);
  }
}

@media only screen and (min-width: 580px) {
  footer {
    flex-direction: row;

    p {
      padding-bottom: 0;
    }
  }
}
</style>
