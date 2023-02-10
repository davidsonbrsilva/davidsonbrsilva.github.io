<script setup lang="ts">
defineProps<{
  isOpen: boolean;
}>();
</script>

<template>
  <section class="container">
    <figure>
      <img src="/src/assets/images/profile.jpg" />
    </figure>
    <div class="content-wrapper">
      <section>
        <h3>Sobre mim</h3>
        <p>
          Obrigado por sua visita! Sou programador formado em Sistemas de Informação pela Universidade Federal dos Vales
          do Jequitinhonha e Mucuri e atualmente trabalho como desenvolvedor líder na dti digital (@dtidigitalcrafters).
          No mundo da programação, interesso-me, principalmente, por Inteligência Artificial, Compiladores e
          Desenvolvimento Web.
        </p>
      </section>
      <section>
        <h3>Precisa de mim para um trabalho?</h3>
        <div class="paragraph-wrapper">
          <p>
            Possuo experiência de mercado em desenvolvimento de APIs com microsserviços em .Net (C#) e desenvolvimento
            de interfaces de usuário com React e React Native. Possuo conhecimento sólido em CSS e SASS, HTML semântico
            e JavaScript nas versões mais recentes a partir do ECMAScript 6. Busco, atualmente, aperfeiçoamento em
            frameworks como Vue e Svelte e em minhas habilidades com o inglês.
          </p>
          <p>
            Conheço as boas práticas apontadas pelas arquiteturas Clean, Onion e Hexagonal, bem como DDD (Domain-Driven
            Development), DevOps e construção de esteiras de CI/CD. Também me identifico bastante com assuntos
            relacionados à UX/UI. Veja mais informações no meu perfil do LinkedIn.
          </p>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  min-height: 100vh;
  background-color: $background-color-base;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin-bottom: 2rem;
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
