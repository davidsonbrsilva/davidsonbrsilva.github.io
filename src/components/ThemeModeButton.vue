<script setup lang="ts">
import { ref } from 'vue';

const isInLightMode = ref(false);
</script>

<template>
  <input
    v-model="isInLightMode"
    type="checkbox"
    id="theme-mode-toggle"
    class="checkbox"
  />
  <label for="theme-mode-toggle" class="toggle-button">
    <i class="material-symbols-outlined dark-mode">dark_mode</i>
    <i class="material-symbols-outlined light-mode">light_mode</i>
    <span>
      {{
        isInLightMode
          ? $t('header.switchToLightModeButton')
          : $t('header.switchToDarkModeButton')
      }}
    </span>
  </label>
</template>

<style lang="scss" scoped>
.checkbox {
  width: 0;
  height: 0;
  visibility: hidden;

  &:checked + label {
    background-color: #ededed;
    border: 1px solid #dbdbdb;
    justify-content: flex-end;

    &:hover {
      border: 1px solid #c9c9c9;
    }

    &:after {
      background-color: #c9c9c9;
    }

    i.dark-mode {
      opacity: 0;
    }

    i.light-mode {
      color: #1a1a1a;
      opacity: 1;
    }
  }
}

.toggle-button {
  width: 4rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #262626;
  border: 1px solid #333333;
  border-radius: 1rem;
  cursor: pointer;
  padding: 0.125rem;
  position: relative;
  transition: 0.3s;

  &:hover {
    border: 1px solid #404040;
  }

  &:after {
    content: '';
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 0.8rem;
    background-color: #1a1a1a;
    transition: 0.3s;
  }

  &:active:after {
    width: 1.75rem;
  }

  i {
    position: absolute;
    font-size: 1rem;

    &.dark-mode {
      opacity: 1;
      left: 4px;
      color: #c9c9c9;
    }

    &.light-mode {
      opacity: 0;
      right: 4px;
    }
  }

  span {
    font-size: 0;
  }
}
</style>
