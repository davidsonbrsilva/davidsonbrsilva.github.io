<script setup lang="ts">
const { labelName, imageIcon } = defineProps<{
  labelName: string;
  imageIcon?: string;
}>();
</script>

<template>
  <span>
    <i v-if="imageIcon"><img :src="imageIcon" /></i>
    {{ labelName }}
  </span>
</template>

<style scoped lang="scss">
span {
  font: $text-label;
  color: $text-color-base;
  border-radius: 0.25rem;
  background-color: $badge-background;
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  i {
    display: flex;
    align-items: center;

    img {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>
