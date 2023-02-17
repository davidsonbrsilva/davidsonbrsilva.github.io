<script setup lang="ts"></script>

<template>
  <div class="loader-container">
    <span>{{ $t('loadingMessage') }}</span>
  </div>
</template>

<style scoped lang="scss">
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background);
}

span {
  font-size: 0;
  width: 2.5rem;
  height: 2.5rem;
  border: 0.25rem solid var(--color-elevation);
  border-top: 0.25rem solid var(--color-text-brand);
  animation: spin 2s linear infinite;
  border-radius: 50%;
}
</style>
