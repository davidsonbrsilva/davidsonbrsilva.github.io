<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import axios from 'axios';

import { projects } from '@locale/en';

import Badge from '@components/Badge.vue';
import Card from '@components/Card.vue';

import socials from '@utils/socials';
import { mapSnakeCaseToSentence, mapProjectNameToCamelCase } from '@utils/helpers';

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

const { t } = useI18n();
const githubProjects = ref<GithubProject[]>();
const mediumPosts = ref<MediumPost[]>();

const buildGithubProjectActions = (project: GithubProject) => {
  project.actions = [];

  project.actions.push({
    name: 'github',
    url: project.html_url,
    icon: '/src/assets/icons/github-icon.svg',
  });

  if (project.homepage) {
    project.actions.push({
      name: 'website',
      url: project.homepage,
      icon: '/src/assets/icons/external-link-icon.svg',
    });
  }

  return project;
};

const buildMediumPostActions = (post: MediumPost) => {
  post.actions = [];

  post.actions.push({
    name: 'website',
    url: post.link,
    icon: '/src/assets/icons/external-link-icon.svg',
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
        <a :href="social.url" target="_blank">
          <Badge
            :label-name="social.label"
            :imageIcon="`/src/assets/icons/${social.label.toLocaleLowerCase()}-icon.svg`"
          />
        </a>
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
        :actions="
          project.actions.map((action) => ({
            ...action,
            name: $t(`portfolio.sections.githubProjects.actions.${action.name}`),
          }))
        "
        :badges="project.topics.map((topic) => mapSnakeCaseToSentence(topic))"
      />
    </div>
  </section>
  <section>
    <h3>{{ $t('portfolio.sections.mediumPosts.title') }}</h3>
    <div class="cards">
      <Card
        v-for="post in mediumPosts"
        :title="post.title"
        :link="post.link"
        :actions="post.actions"
        :image="post.thumbnail"
        :badges="post.categories.map((category) => mapSnakeCaseToSentence(category))"
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
</style>
