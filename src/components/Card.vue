<script setup lang="ts">
import Badge from './Badge.vue';

const { title, description, actions, badges } = defineProps<{
  title: string;
  description: string;
  actions: {
    name: string;
    url: string;
    iconPath: string;
  }[];
  badges: string[];
}>();
</script>

<template>
  <div class="card-container">
    <header>
      <h4>{{ title }}</h4>
      <ul>
        <li v-for="action in actions">
          <a :href="action.url">
            <i><img :src="action.iconPath" /></i>{{ action.name }}</a
          >
        </li>
      </ul>
    </header>
    <p>{{ description }}</p>
    <footer>
      <Badge v-for="badge in badges" :label-name="badge" />
    </footer>
  </div>
</template>

<style scoped lang="scss">
.card-container {
  background-color: $background-color-elevation;
  border-radius: 0.5rem;
  padding: 1.5rem;
  border: 1px solid $border-color-normal;
  max-width: 37.5rem;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;

  h4 {
    padding-bottom: 0;
    color: $card-text-title;
  }

  ul {
    display: flex;
    align-items: center;
  }

  li {
    list-style: none;
    line-height: 0;

    a {
      font-size: 0;
      padding: 0.5rem;
      display: block;

      img {
        width: 1.5rem;
      }
    }
  }
}

footer {
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
