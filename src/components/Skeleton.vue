<template>
  <div class="card-container">
    <div class="header">
      <div class="title"></div>
      <div class="action"></div>
    </div>
    <div class="paragraphs">
      <div class="paragraph"></div>
      <div class="paragraph"></div>
      <div class="paragraph"></div>
    </div>
    <div class="badges">
      <div class="badge"></div>
      <div class="badge"></div>
      <div class="badge"></div>
      <div class="badge"></div>
      <div class="badge"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-container {
  background-color: $background-color-elevation;
  border-radius: 0.5rem;
  border: 1px solid $border-color-normal;
  width: 100%;
  max-width: 36.25rem;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  padding: 1.5rem;
  animation: flash 1s infinite forwards;
}

.title {
  width: 10rem;
  height: 1rem;
  background-color: $badge-background;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
}

.action {
  width: 24px;
  height: 24px;
  background-color: $badge-background;
  border-radius: 50%;
  margin: 0.75rem 0.5rem;
}

.paragraphs {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding-bottom: 1.5rem;
}

.paragraph {
  width: 100%;
  height: 1rem;
  background-color: $badge-background;

  &:last-child {
    width: 60%;
  }
}

.badges {
  display: flex;
  gap: 1rem;
}

.badge {
  width: 4rem;
  height: 2rem;
  border-radius: 0.25rem;
  background-color: $badge-background;

  &:nth-child(1) {
    flex-grow: 3;
  }

  &:nth-child(2) {
    flex-grow: 1;
  }

  &:nth-child(3) {
    flex-grow: 2;
  }

  &:nth-child(4) {
    flex-grow: 1;
  }

  &:nth-child(5) {
    flex-grow: 2;
  }
}

@keyframes flash {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
