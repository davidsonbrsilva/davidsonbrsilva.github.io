<script setup lang="ts">
import { onMounted, ref } from 'vue';

const {
  iconOn,
  iconOff,
  helpTextOn,
  helpTextOff,
  isOn = false,
} = defineProps<{
  iconOn?: string;
  iconOff?: string;
  helpTextOn: string;
  helpTextOff: string;
  isOn?: boolean;
}>();

const emit = defineEmits(['click']);
</script>

<template>
  <input :checked="isOn" type="checkbox" id="theme-mode-toggle" class="checkbox" @click="emit('click')" />
  <label for="theme-mode-toggle" class="toggle-button">
    <i v-if="iconOn" class="icon-on"><img :src="iconOn" :alt="$t('button.defaultIcon')" /></i>
    <i v-if="iconOff" class="icon-off"><img :src="iconOff" :alt="$t('button.activeIcon')" /></i>
    <span>
      {{ isOn ? helpTextOn : helpTextOff }}
    </span>
  </label>
</template>

<style lang="scss" scoped>
.checkbox {
  width: 0;
  height: 0;
  visibility: hidden;

  &:checked + label {
    background-color: var(--color-elevation);
    border: 1px solid var(--color-border-normal);
    justify-content: flex-end;

    &:hover {
      border: 1px solid var(--color-border-hover);
    }

    i {
      filter: var(--color-icon-hover);
    }

    i.icon-on {
      opacity: 0;
    }

    i.icon-off {
      color: var(--color-text-normal);
      opacity: 1;
    }
  }
}

label {
  i {
    width: 1rem;
    height: 1rem;
    filter: var(--color-icon-normal);
  }

  img {
    max-width: 100%;
  }
}

.toggle-button {
  width: 4rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #262626;
  border: 1px solid var(--color-border-normal);
  border-radius: 1rem;
  cursor: pointer;
  padding: 0.125rem;
  position: relative;
  transition: 0.3s;

  &:hover {
    border: 1px solid var(--color-border-hover);
  }

  &:after {
    content: '';
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 0.8rem;
    background-color: var(--color-background);
    transition: 0.3s;
  }

  &:active:after {
    width: 1.75rem;
  }

  i {
    position: absolute;
    font-size: 1rem;

    &.icon-on {
      opacity: 1;
      left: 5px;
      color: var(--color-text-normal);
    }

    &.icon-off {
      opacity: 0;
      right: 5px;
    }
  }

  span {
    font-size: 0;
  }
}
</style>
