<script setup lang="ts">
const { label, iconDefault, iconHover } = defineProps<{
  label: string;
  iconDefault?: string;
  iconHover?: string;
}>();
</script>

<template>
  <button type="button">
    <i v-if="iconDefault" id="icon-default" class="material-symbols-outlined">{{ iconDefault }}</i>
    <i v-if="iconDefault && iconHover" id="icon-hover" class="material-symbols-outlined">{{ iconHover }}</i>
    <span class="label">{{ label }}</span>
  </button>
</template>

<style scoped lang="scss">
button {
  font: var(--text-button);
  cursor: pointer;
  outline: none;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  padding: 0.2rem;
  border-radius: 2rem;
  color: var(--color-button-text-secondary);
  background-color: var(--color-button-background-primary-normal);
  transition: 0.3s;
  white-space: nowrap;

  .label {
    padding: 0 0.4rem;
  }

  i + .label {
    display: none;
  }

  #icon-default {
    display: block;
  }

  #icon-hover {
    display: none;
  }

  &:hover {
    background-color: var(--color-button-background-primary-hover);

    #icon-default {
      display: none;
    }

    #icon-hover {
      display: block;
    }
  }
}

@media only screen and (min-width: 300px) {
  button {
    i + .label {
      display: block;
    }
  }
}
</style>
