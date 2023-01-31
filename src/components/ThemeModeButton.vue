<script setup lang="ts">
import { ref } from 'vue';

const isInLightMode = ref(false);
</script>

<template>
  <input v-model="isInLightMode" type="checkbox" id="theme-mode-toggle" class="checkbox" />
  <label for="theme-mode-toggle" class="toggle-button">
    <i class="material-symbols-outlined dark-mode">dark_mode</i>
    <i class="material-symbols-outlined light-mode">light_mode</i>
    <span>
      {{ isInLightMode ? $t('header.switchToLightModeButton') : $t('header.switchToDarkModeButton') }}
    </span>
  </label>
</template>

<style lang="scss" scoped>
.checkbox {
  width: 0;
  height: 0;
  visibility: hidden;

  &:checked + label {
    background-color: $background-color-elevation;
    border: 1px solid $border-color-normal;
    justify-content: flex-end;

    &:hover {
      border: 1px solid $border-color-hover;
    }

    // &:after {
    // background-color: ;
    // }

    i.dark-mode {
      opacity: 0;
    }

    i.light-mode {
      color: $text-color-base;
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
  border: 1px solid $border-color-normal;
  border-radius: 1rem;
  cursor: pointer;
  padding: 0.125rem;
  position: relative;
  transition: 0.3s;

  &:hover {
    border: 1px solid $border-color-hover;
  }

  &:after {
    content: '';
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 0.8rem;
    background-color: $background-color-base;
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
      left: 5px;
      color: $text-color-base;
    }

    &.light-mode {
      opacity: 0;
      right: 5px;
    }
  }

  span {
    font-size: 0;
  }
}
</style>
