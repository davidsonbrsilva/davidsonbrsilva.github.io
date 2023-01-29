<template>
  <button type="button">
    <i class="material-symbols-outlined satisfied">sentiment_satisfied</i>
    <i class="material-symbols-outlined happy">mood</i>
    {{ $t("header.aboutMeButton") }}
  </button>
</template>

<style scoped>
button {
  font-size: 0.8125rem;
  padding: 0.2rem;
  padding-right: 0.8rem;
  border-radius: 2rem;
  /* text-transform: uppercase; */
  font-family: "Inter", sans-serif;
  font-weight: bold;
  outline: none;
  border: none;
  color: #1a1a1a;
  background: none;
  background-color: #ffbf40;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: 0.3s;
}

button i {
  margin-right: 0.4rem;
}

button i.satisfied {
  display: block;
}

button i.happy {
  display: none;
}

button:hover {
  background-color: #ffaa00;
}

button:hover i.satisfied,
button:active i.satisfied {
  display: none;
}

button:hover i.happy,
button:active i.happy {
  display: block;
}
</style>
