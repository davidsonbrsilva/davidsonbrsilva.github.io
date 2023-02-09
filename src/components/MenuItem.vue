<script setup lang="ts">
const { labelName, iconName, onClick } = defineProps<{
  labelName: string;
  iconName?: string;
  onClick?: () => void;
}>();
</script>

<template>
  <li>
    <i class="material-symbols-outlined">{{ iconName }}</i>
    <button type="button" @click="onClick">
      {{ labelName }}
    </button>
  </li>
</template>

<style scoped lang="scss">
li {
  list-style: none;

  button {
    width: 100%;
    text-align: left;
    padding: 0.5rem 1rem;
    background: transparent;
    outline: none;
    border: none;
    color: $button-text-secondary-normal;
    font: $text-label;
    cursor: pointer;

    &:hover {
      background-color: $button-background-secondary-hover;
    }
  }
}
</style>
