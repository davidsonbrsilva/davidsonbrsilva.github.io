<script setup lang="ts">
import Badge from '@components/Badge.vue';
import Card from '@components/Card.vue';

const socials = [
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/davidsonbrsilva',
  },
  {
    label: 'Github',
    url: 'https://github.com/davidsonbrsilva',
  },
  {
    label: 'Replit',
    url: 'https://replit.com/@davidsonbrsilva',
  },
  {
    label: 'Codepen',
    url: 'https://codepen.io/davidsonbrsilva',
  },
  {
    label: 'Medium',
    url: 'https://medium.com/@davidsonbrsilva',
  },
];

const actions = [
  {
    name: 'View on Github',
    url: 'https://github.com/davidsonbrsilva/aquascript',
    iconPath: '/src/assets/svg/github-icon.svg',
  },
  {
    name: 'View website',
    url: '#',
    iconPath: '/src/assets/svg/external-link-icon.svg',
  },
];
</script>

<template>
  <section>
    <div class="title-wrapper">
      <h1>Davidson Bruno</h1>
      <h2>Desenvolvedor de Software</h2>
    </div>
    <ul class="social-links">
      <li v-for="social in socials">
        <a :href="social.url" target="_blank">
          <Badge
            :label-name="social.label"
            :imageIcon="`/src/assets/svg/${social.label.toLocaleLowerCase()}-icon.svg`"
          />
        </a>
      </li>
    </ul>
  </section>
  <section>
    <h3>Projetos</h3>
    <div class="cards">
      <Card
        title="aquascript"
        description="AquaScript é uma linguagem de programação procedural desenvolvida para fins de aprendizado sobre teoria de compiladores. Apesar do termo script em seu nome, é uma linguagem de programação compilada."
        :actions="actions"
        :badges="['Linguagem de Programação', 'Compiladores', 'Analisador Léxico']"
      />
      <Card
        title="aquascript"
        description="AquaScript é uma linguagem de programação procedural desenvolvida para fins de aprendizado sobre teoria de compiladores. Apesar do termo script em seu nome, é uma linguagem de programação compilada."
        :actions="actions"
        :badges="['Linguagem de Programação', 'Compiladores', 'Analisador Léxico']"
      />
      <Card
        title="aquascript"
        description="AquaScript é uma linguagem de programação procedural desenvolvida para fins de aprendizado sobre teoria de compiladores. Apesar do termo script em seu nome, é uma linguagem de programação compilada."
        :actions="actions"
        :badges="['Linguagem de Programação', 'Compiladores', 'Analisador Léxico']"
      />
    </div>
  </section>
</template>
<style scoped lang="scss">
section {
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.title-wrapper {
  &:before,
  &:after {
    content: '';
    display: block;
    width: 40px;
    height: 2px;
    background-color: $background-color-elevation;
    margin: 1rem auto;
  }
}

.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
}

h1,
h2 {
  text-align: center;
}

.cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
