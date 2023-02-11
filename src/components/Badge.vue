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
      <i v-if="iconImage"><img :src="iconImage" :alt="iconDescription" /></i>
      {{ labelName }}
    </span>
  </a>
  <span v-else>
    <i v-if="iconImage"><img :src="iconImage" :alt="iconDescription" /></i>
    {{ labelName }}
  </span>
</template>

<style scoped lang="scss">
a:hover {
  span {
    color: $button-text-secondary-hover;
  }
  img {
    filter: $icon-hover;
  }
}

span {
  font: $text-label;
  color: $button-text-secondary-normal;
  border-radius: 0.25rem;
  background-color: $badge-background;
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
    filter: $icon-normal;
  }
}
</style>
