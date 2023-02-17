<script setup lang="ts">
import { ref } from 'vue';

const {
  labelName,
  iconName,
  isActive = false,
  isLabelHidden = false,
} = defineProps<{
  labelName: string;
  iconName?: string;
  isActive?: boolean;
  isLabelHidden?: boolean;
}>();

const root = ref(null);

defineExpose({
  root,
});
</script>

<template>
  <div class="container" ref="root">
    <button :class="{ active: isActive }" type="button" @click="$emit('toggle')">
      <i v-if="iconName" class="material-symbols-outlined">{{ iconName }}</i>
      <span v-show="!isLabelHidden">{{ labelName }}</span>
    </button>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
}

button {
  padding: 0 0.5rem;
  font: var(--text-button);
  outline: none;
  border: none;
  color: var(--color-button-text-primary-normal);
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  &:hover {
    color: var(--color-button-text-primary-hover);
  }

  &.active {
    color: var(--color-button-text-primary-active);
  }
}
</style>
