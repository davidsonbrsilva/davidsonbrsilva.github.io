<script setup lang="ts">
import MenuButton from '@components/MenuButton.vue';

const { isOpen = false, isAnimationEnabled = false } = defineProps<{
  isOpen: boolean;
  isAnimationEnabled?: boolean;
}>();
</script>

<template>
  <section
    class="section-container"
    :class="{ open: isOpen && isAnimationEnabled, closed: !isOpen && isAnimationEnabled }"
  >
    <MenuButton
      :label-name="$t('aboutMe.sections.aboutMe.closeButton')"
      icon-name="close"
      class="close-button"
      @click="$emit('close')"
    />
    <figure>
      <img src="https://github.com/davidsonbrsilva.png" alt="Davidson's profile image" width="200" height="200" />
    </figure>
    <div class="content-wrapper">
      <section>
        <h3>{{ $t('aboutMe.sections.aboutMe.title') }}</h3>
        <p v-html="$t('aboutMe.sections.aboutMe.paragraph')"></p>
      </section>
      <section>
        <h3>{{ $t('aboutMe.sections.job.title') }}</h3>
        <div class="paragraph-wrapper">
          <p v-html="$t('aboutMe.sections.job.paragraph1')"></p>
          <p v-html="$t('aboutMe.sections.job.paragraph2')"></p>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped lang="scss">
@keyframes close-up {
  0% {
    height: auto;
    min-height: 100vh;
    opacity: 1;
    padding: 1rem;
  }
  100% {
    height: 0;
    min-height: 0;
    opacity: 0;
    padding: 0;
  }
}

@keyframes open-down {
  0% {
    height: 0;
    min-height: 0;
    opacity: 0;
    padding: 0;
  }
  100% {
    height: auto;
    min-height: 100vh;
    opacity: 1;
    padding: 1rem;
  }
}

.section-container {
  min-height: 100vh;
  background-color: var(--color-background);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  height: 0;
  min-height: 0;
  opacity: 0;
  padding: 0;

  &.open {
    animation: open-down 0.5s ease-out 0s 1 normal forwards;
  }

  &.closed {
    animation: close-up 0.5s ease-out 0s 1 normal forwards;
  }
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.content-wrapper {
  display: block;

  section {
    padding-bottom: 1rem;

    &:last-child {
      padding-bottom: 0;
    }
  }
}

figure {
  width: 200px;
  height: 200px;
  min-width: 200px;
  min-height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 4rem 0 2rem 0;

  img {
    max-width: 100%;
  }
}

p {
  padding-bottom: 1rem;
}

.paragraph-wrapper {
  display: block;
}

@media only screen and (min-width: 580px) {
  .paragraph-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5rem;
  }
}

@media only screen and (min-width: 680px) {
  .content-wrapper {
    max-width: 680px;
  }
}

@media only screen and (min-width: 940px) {
  .content-wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 1.5rem;
    max-width: 1200px;

    section {
      padding-bottom: 0;
    }
  }
}
</style>
