<script lang="ts" setup>
const socialBadges = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/davidsonbrsilva',
  },
  {
    name: 'Github',
    url: 'https://github.com/davidsonbrsilva',
  },
  {
    name: 'Replit',
    url: 'https://replit.com/@davidsonbrsilva',
  },
  {
    name: 'Codepen',
    url: 'https://codepen.io/davidsonbrsilva',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/davidsonbrsilva',
  },
];
</script>

<template>
  <main class="container">
    <h1 class="title">{{ $t('homepage.title') }}</h1>
    <h2 class="subtitle">{{ $t('homepage.subtitle') }}</h2>
    <ul class="social">
      <li v-for="badge in socialBadges">
        <a :href="badge.url"><i class="material-symbols-outlined"></i>{{ badge.name }}</a>
      </li>
    </ul>
  </main>
</template>

<style lang="scss" scoped>
.container {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.title {
  text-align: center;
}

.subtitle {
  text-align: center;
  padding-bottom: 2rem;
}

.social {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;

  li {
    list-style: none;
    padding-right: 0.5rem;
    line-height: 2;

    &:last-child {
      padding-right: 0;
    }
  }

  a {
    text-decoration: none;
    color: $button-text-secondary-normal;
    background-color: $background-color-elevation;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
}
</style>
