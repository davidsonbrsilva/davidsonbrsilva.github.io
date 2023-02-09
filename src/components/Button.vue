<script setup lang="ts">
import { onMounted, ref } from 'vue';

const { iconDefault, iconHover } = defineProps<{
  iconDefault?: string;
  iconHover?: string;
}>();

const button = ref<HTMLElement | null>(null);

const hasIcon = (button: HTMLElement | null) => button?.querySelector('i') != null;

onMounted(() => {
  if (button.value) {
    if (hasIcon(button.value)) {
      button.value.style.paddingLeft = '0.2rem';
    }
  }
});
</script>

<template>
  <button type="button" ref="button">
    <i v-if="iconDefault" id="icon-default" class="material-symbols-outlined">{{ iconDefault }}</i>
    <i v-if="iconDefault && iconHover" id="icon-hover" class="material-symbols-outlined">{{ iconHover }}</i>
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
button {
  font: $text-button;
  cursor: pointer;
  outline: none;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  padding: 0.2rem 0.8rem;
  border-radius: 2rem;
  color: $button-text-primary;
  background-color: $button-background-primary-normal;
  transition: 0.3s;
  white-space: nowrap;

  i {
    margin-right: 0.4rem;
  }

  #icon-default {
    display: block;
  }

  #icon-hover {
    display: none;
  }

  &:hover {
    background-color: $button-background-primary-hover;

    i {
      margin-right: 0.4rem;
    }

    #icon-default {
      display: none;
    }

    #icon-hover {
      display: block;
    }
  }
}
</style>
