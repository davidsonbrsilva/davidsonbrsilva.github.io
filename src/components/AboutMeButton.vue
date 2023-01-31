<template>
  <button type="button" class="button button-about-me">
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
  font-weight: bold;
  color: $button-text-primary;
  background-color: $button-background-primary-normal;
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
    background-color: $button-background-primary-hover;

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
