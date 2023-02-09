<script setup lang="ts">
const {
  labelName,
  isActive,
  iconName,
  isLabelHidden = false,
} = defineProps<{
  labelName: string;
  isActive: boolean;
  iconName?: string;
  isLabelHidden?: boolean;
}>();
</script>

<template>
  <div class="menu">
    <button :class="{ active: isActive }" type="button" @click="$emit('toggle')">
      <i v-if="iconName" class="material-symbols-outlined">{{ iconName }}</i>
      <span v-show="!isLabelHidden">{{ labelName }}</span>
    </button>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  position: relative;
}

button {
  padding: 0 0.5rem;
  font: $text-button;
  outline: none;
  border: none;
  color: $button-text-secondary-normal;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  &:hover {
    color: $button-text-secondary-hover;
  }

  &.active {
    color: $button-text-secondary-active;
  }
}
</style>
