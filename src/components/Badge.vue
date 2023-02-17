<script setup lang="ts">
const { labelName, iconImage, iconDescription, url } = defineProps<{
  labelName: string;
  iconImage?: string;
  iconDescription?: string;
  url?: string;
}>();
</script>

<template>
  <a v-if="url" :href="url" target="_blank">
    <span>
      <i v-if="iconImage"><img :src="iconImage" :alt="iconDescription" width="32" height="32" /></i>
      {{ labelName }}
    </span>
  </a>
  <span v-else>
    <i v-if="iconImage"><img :src="iconImage" :alt="iconDescription" width="32" height="32" /></i>
    {{ labelName }}
  </span>
</template>

<style scoped lang="scss">
a:hover {
  span {
    color: var(--color-button-text-primary-hover);
  }
  img {
    filter: var(--color-icon-hover);
  }
}

span {
  font: var(--text-label);
  color: var(--color-button-text-primary-normal);
  border-radius: 0.25rem;
  background-color: var(--color-badge-background);
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  i {
    display: flex;
    align-items: center;
  }

  img {
    width: 1rem;
    height: 1rem;
    filter: var(--color-icon-normal);
  }
}
</style>
