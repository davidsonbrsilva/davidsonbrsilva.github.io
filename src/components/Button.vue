<script setup lang="ts">
const { label, iconDefault, iconHover } = defineProps<{
  label: string;
  iconDefault?: string;
  iconHover?: string;
}>();
</script>

<template>
  <button type="button">
    <i v-if="iconDefault" id="icon-default">
      <img :src="iconDefault" :alt="$t('button.defaultIcon')" width="24" height="24" />
    </i>
    <i v-if="iconDefault && iconHover" id="icon-hover">
      <img :src="iconHover" :alt="$t('button.hoverIcon')" width="24" height="24" />
    </i>
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

  i {
    width: 1.5rem;
    height: 1.5rem;
    filter: var(--color-button-icon-secondary);
  }

  img {
    max-width: 100%;
  }

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

@media only screen and (min-width: 320px) {
  button {
    i + .label {
      display: block;
    }
  }
}
</style>
