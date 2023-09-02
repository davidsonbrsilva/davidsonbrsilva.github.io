<script setup lang="ts">
const { labelName, iconName } = defineProps<{
  labelName: string;
  iconName?: string;
}>();
</script>

<template>
  <li>
    <i class="material-symbols-outlined">{{ iconName }}</i>
    <button type="button" @click.stop="$emit('click')">
      {{ labelName }}
    </button>
  </li>
</template>

<style scoped lang="scss">
li {
  list-style: none;

  button {
    width: 100%;
    text-align: center;
    padding: 0.5rem 1rem;
    background: transparent;
    outline: none;
    border: none;
    color: var(--color-button-text-primary-normal);
    font: var(--text-label);
    cursor: pointer;

    &:hover {
      background-color: var(--color-button-background-secondary-hover);
    }
  }
}
</style>
