<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const {
  labelName,
  iconName,
  activeIconName,
  isActive = false,
  isLabelHidden = false,
  showLabelFromScreenWidth = 460,
} = defineProps<{
  labelName: string;
  iconName?: string;
  activeIconName?: string;
  isActive?: boolean;
  isLabelHidden?: boolean;
  showLabelFromScreenWidth?: number;
}>();

const root = ref(null);
const deviceWidth = ref(window.innerWidth);

onMounted(() => {
  window.addEventListener('resize', () => {
    deviceWidth.value = window.innerWidth;
  });
});

const mustShowLabel = computed(() => !isLabelHidden && deviceWidth.value >= showLabelFromScreenWidth);

defineExpose({
  root,
});
</script>

<template>
  <div class="container" ref="root">
    <button :class="{ active: isActive }" type="button" @click="$emit('toggle')">
      <i v-if="iconName && !activeIconName"
        ><img :src="iconName" :alt="$t('button.defaultIcon')" width="24" height="24"
      /></i>
      <i v-else-if="iconName && activeIconName && !isActive">
        <img :src="iconName" :alt="$t('button.defaultIcon')" width="24" height="24" />
      </i>
      <i v-if="iconName && activeIconName && isActive">
        <img :src="activeIconName" :alt="$t('button.activeIcon')" width="24" height="24" />
      </i>
      <span v-show="mustShowLabel">{{ labelName }}</span>
    </button>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
}

button {
  font: var(--text-button);
  outline: none;
  border: none;
  color: var(--color-button-text-primary-normal);
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  i {
    width: 1.5rem;
    height: 1.5rem;
    filter: var(--color-icon-normal);
  }

  img {
    max-width: 100%;
  }

  &:hover {
    color: var(--color-button-text-primary-hover);

    i {
      filter: var(--color-icon-hover);
    }
  }

  &.active {
    color: var(--color-button-text-primary-active);

    i {
      filter: var(--color-icon-active);
    }
  }
}
</style>
