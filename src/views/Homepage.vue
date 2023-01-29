<script lang="ts" setup>
import AboutMe from "./Homepage/AboutMe.vue";
import Portfolio from "./Homepage/Portfolio.vue";
</script>

<template>
  <AboutMe />

  <main>
    <section class="presentation">
      <h1>{{ $t("homepage.title") }}</h1>
      <h2>{{ $t("homepage.subtitle") }}</h2>
      <ul class="social">
        <li>
          <a href="#"><i class="material-symbols-outlined"></i>LinkedIn</a>
        </li>
        <li>
          <a href="#"><i class="material-symbols-outlined"></i>Github</a>
        </li>
        <li>
          <a href="#"><i class="material-symbols-outlined"></i>Replit</a>
        </li>
        <li>
          <a href="#"><i class="material-symbols-outlined"></i>Codepen</a>
        </li>
        <li>
          <a href="#"><i class="material-symbols-outlined"></i>Instagram</a>
        </li>
      </ul>
    </section>

    <Portfolio />
  </main>
</template>

<style scoped>
main {
  padding: 0 1rem;
}

h1 {
  font-size: 2rem;
  color: #ffbf40;
}

h2 {
  font-size: 1.5rem;
  color: #c9c9c9;
}

h1,
h2 {
  font-family: "Inter", sans-serif;
}

h1,
h2,
ul {
  text-align: center;
  margin: 0 auto;
}

h2 {
  font-weight: normal;
  padding-bottom: 2rem;
}

.presentation {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.social {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.social li {
  list-style: none;
  padding-right: 0.5rem;
  line-height: 2;
}

.social li:last-child {
  padding-right: 0;
}

.social a {
  text-decoration: none;
  color: #c9c9c9;
  background-color: #262626;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}
</style>
