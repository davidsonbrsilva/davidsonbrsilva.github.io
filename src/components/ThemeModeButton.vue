<script setup lang="ts">
import { ref } from "vue";

const isInLightMode = ref(false);
</script>

<template>
  <input v-model="isInLightMode" type="checkbox" id="theme-mode-toggle" />
  <label for="theme-mode-toggle">
    <i class="material-symbols-outlined dark-mode">dark_mode</i>
    <i class="material-symbols-outlined light-mode">light_mode</i>
    <span>
      {{
        isInLightMode
          ? $t("header.switchToLightModeButton")
          : $t("header.switchToDarkModeButton")
      }}
    </span>
  </label>
</template>

<style scoped>
input {
  width: 0;
  height: 0;
  visibility: hidden;
}

label {
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
}

label:hover {
  border: 1px solid #404040;
}

input:checked + label {
  background-color: #ededed;
  border: 1px solid #dbdbdb;
  justify-content: flex-end;
}

input:checked + label:hover {
  border: 1px solid #ededed;
}

label:after {
  content: "";
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 0.8rem;
  background-color: #1a1a1a;
}

input:checked + label:after {
  background-color: #c9c9c9;
}

label,
label:after {
  transition: 0.3s;
}

label:active:after {
  width: 1.75rem;
}

label i {
  position: absolute;
  font-size: 1rem;
}

label i.dark-mode {
  opacity: 1;
  left: 4px;
  color: #c9c9c9;
}

label i.light-mode {
  opacity: 0;
  right: 4px;
}

input:checked + label i.dark-mode {
  opacity: 0;
}

input:checked + label i.light-mode {
  color: #1a1a1a;
  opacity: 1;
}

label span {
  font-size: 0;
}
</style>
