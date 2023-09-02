<script setup lang="ts">
import { ref } from 'vue';

const root = ref(null);

defineExpose({
  root,
});
</script>

<template>
  <menu ref="root">
    <slot></slot>
  </menu>
</template>

<style scoped lang="scss">
menu {
  min-width: 100px;
  background-color: var(--color-elevation);
  border-radius: 0.5rem;
  position: absolute;
  top: 36px;
  right: 0;
  padding: 0.5rem 0;
  overflow: hidden;
  border: 1px solid var(--color-border-normal);
  @include shadow;
}
</style>
