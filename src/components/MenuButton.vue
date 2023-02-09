<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const {
  labelName,
  iconName,
  hideLabel = false,
  isMenuOpen,
} = defineProps<{
  labelName: string;
  iconName?: string;
  hideLabel?: boolean;
  isMenuOpen: boolean;
}>();

const i18n = useI18n();
</script>

<template>
  <div class="menu">
    <button :class="{ active: isMenuOpen }" type="button" @click="$emit('toggleMenu')">
      <i v-if="iconName" class="material-symbols-outlined">{{ iconName }}</i>
      <span :class="{ hideLabel }">{{ labelName }}</span>
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

.hideLabel {
  font-size: 0;
}
</style>
