<script setup lang="ts">
import Badge from './Badge.vue';

const { title, url, description, image, actions, badges } = defineProps<{
  title: string;
  badges: string[];
  description?: string;
  url?: string;
  image?: string;
  actions?: {
    name: string;
    url: string;
    icon: string;
  }[];
}>();
</script>

<template>
  <div class="card-container">
    <figure v-if="image">
      <a v-if="url" :href="url" target="_blank"><img :src="image" href="Card thumbnail" /></a>
      <img v-else :src="image" />
    </figure>
    <div class="content-wrapper">
      <header>
        <a v-if="url" :href="url" target="_blank">
          <h4>{{ title }}</h4>
        </a>
        <h4 v-else>{{ title }}</h4>
        <ul v-if="actions">
          <li v-for="action in actions">
            <a :href="action.url" target="_blank">
              <i><img :src="action.icon" :alt="`${action.name} icon`" /></i>{{ action.name }}
            </a>
          </li>
        </ul>
      </header>
      <p v-if="description">{{ description }}</p>
      <footer>
        <Badge v-for="badge in badges" :label-name="badge" />
      </footer>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-container {
  background-color: $background-color-elevation;
  border-radius: 0.5rem;
  border: 1px solid $border-color-normal;
  width: 100%;
  max-width: 36.25rem;
  display: flex;
  overflow: hidden;
  flex-direction: column;
}

.content-wrapper {
  padding: 1.5rem;
}

figure {
  width: 100%;
  flex-shrink: 0;

  img {
    max-width: 100%;

    object-fit: cover;
    height: 100%;
  }
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  column-gap: 1rem;

  h4 {
    padding-bottom: 0;
    color: $card-text-title;
    text-overflow: ellipsis;
    overflow: hidden;
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
        filter: $icon-normal;
      }

      &:hover {
        img {
          filter: $icon-hover;
        }
      }
    }
  }
}

p {
  padding-bottom: 1rem;
}

footer {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

@media only screen and (min-width: 580px) {
  .card-container {
    flex-direction: row;
  }

  figure {
    width: 200px;
  }
}
</style>
