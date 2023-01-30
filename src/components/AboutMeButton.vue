<template>
  <button type="button" class="button-about-me">
    <i class="material-symbols-outlined satisfied">sentiment_satisfied</i>
    <i class="material-symbols-outlined happy">mood</i>
    {{ $t('header.aboutMeButton') }}
  </button>
</template>

<style lang="scss" scoped>
.button-about-me {
  outline: none;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  padding: 0.2rem;
  padding-right: 0.8rem;
  border-radius: 2rem;
  font: bold 0.8125rem 'Inter', sans-serif;
  color: #1a1a1a;
  background-color: #ffbf40;
  transition: 0.3s;

  i {
    margin-right: 0.4rem;

    &.satisfied {
      display: block;
    }

    &.happy {
      display: none;
    }
  }

  &:hover {
    background-color: #ffaa00;

    i.satisfied {
      display: none;
    }

    i.happy {
      display: block;
    }
  }

  &:active {
    i.satisfied {
      display: none;
    }

    i.happy {
      display: block;
    }
  }
}
</style>
