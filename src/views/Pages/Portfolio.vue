<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';

import { projects } from '@locale/en';

import Badge from '@components/Badge.vue';
import Card from '@components/Card.vue';

import socials from '@utils/socials';
import { mapKebabeCaseToSentence, mapProjectNameToCamelCase } from '@utils/helpers';

interface Action {
  name: string;
  url: string;
  icon: string;
}

interface GithubProject {
  name: string;
  homepage?: string;
  html_url: string;
  topics: string[];
  actions: Action[];
}

interface MediumPost {
  title: string;
  link: string;
  thumbnail: string;
  categories: string[];
  actions: Action[];
}

const githubProjects = ref<GithubProject[]>();
const mediumPosts = ref<MediumPost[]>();

const buildGithubProjectActions = (project: GithubProject) => {
  project.actions = [];

  project.actions.push({
    name: 'github',
    url: project.html_url,
    icon: 'icons/github-icon.svg',
  });

  if (project.homepage) {
    project.actions.push({
      name: 'website',
      url: project.homepage,
      icon: 'icons/external-link-icon.svg',
    });
  }

  return project;
};

const buildMediumPostActions = (post: MediumPost) => {
  post.actions = [];

  post.actions.push({
    name: 'website',
    url: post.link,
    icon: 'icons/external-link-icon.svg',
  });

  return post;
};

const getGithubProjects = async () => {
  await axios.get('https://api.github.com/users/davidsonbrsilva/repos').then((response) => {
    githubProjects.value = (response.data as GithubProject[])
      .filter((project) => Object.keys(projects).includes(mapProjectNameToCamelCase(project.name)))
      .map((project) => buildGithubProjectActions(project));
  });
};

const getMediumPosts = async () => {
  await axios
    .get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@davidsonbrsilva')
    .then((response) => {
      mediumPosts.value = (response.data.items as MediumPost[]).map((post) => buildMediumPostActions(post));
    });
};

onMounted(() => {
  getGithubProjects();
  getMediumPosts();
});
</script>

<template>
  <section>
    <div class="title-wrapper">
      <h1>{{ $t('portfolio.title') }}</h1>
      <h2>{{ $t('portfolio.subtitle') }}</h2>
    </div>
    <ul class="social-links">
      <li v-for="social in socials">
        <Badge
          :label-name="social.label"
          :url="social.url"
          :imageIcon="`icons/${social.label.toLocaleLowerCase()}-icon.svg`"
        />
      </li>
    </ul>
  </section>
  <section>
    <h3>{{ $t('portfolio.sections.githubProjects.title') }}</h3>
    <div class="cards">
      <Card
        v-for="project in githubProjects"
        :title="project.name"
        :description="$t(`portfolio.sections.githubProjects.projects.${mapProjectNameToCamelCase(project.name)}`)"
        :url="project.html_url"
        :actions="
          project.actions.map((action) => ({
            ...action,
            name: $t(`portfolio.sections.githubProjects.actions.${action.name}`),
          }))
        "
        :badges="project.topics.map((topic) => mapKebabeCaseToSentence(topic))"
        class="card"
      />
    </div>
  </section>
  <section>
    <h3>{{ $t('portfolio.sections.mediumPosts.title') }}</h3>
    <div class="cards">
      <Card
        v-for="post in mediumPosts"
        :title="post.title"
        :url="post.link"
        :actions="post.actions"
        :image="post.thumbnail"
        :badges="post.categories.map((category) => mapKebabeCaseToSentence(category))"
        class="card"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.title-wrapper {
  &:before,
  &:after {
    content: '';
    display: block;
    width: 40px;
    height: 2px;
    background-color: $background-color-elevation;
    margin: 1rem auto;
  }
}

.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
}

h1,
h2 {
  text-align: center;
}

h3 {
  text-align: center;
}

.cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  border-color: $border-color-normal;
  transition: opacity 0.2s ease-in;

  &:hover {
    border-color: $border-color-hover;
  }
}
</style>
