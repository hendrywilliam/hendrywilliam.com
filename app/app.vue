<script setup lang="ts">
const experiences = [
  {
    title: "PT Biznet Gio Nusantara",
    level: "Software Engineer I",
    description:
      "Contributed to multiple products. Developed backend services/endpoints, API integrations and interfaces. Collaborated with cross-functional teams to improve product functionality and user experience.",
  },
];

const projects = [
  {
    name: "Oober",
    description: "A collection of K8s Objects/Configurations.",
    url: "https://github.com/hendrywilliam/oober",
  },
  {
    name: "Norma",
    description: "A platform for querying Indonesian legal documents.",
    url: "https://github.com/hendrywilliam/oober",
  },
  {
    name: "Dcbot",
    description: "A discord bot implementation from scratch.",
    url: "https://github.com/hendrywilliam/dcbot",
  },
  {
    name: "Ragdcbot",
    description: "A simple discord bot with Retrieval-Augmented Generation.",
    url: "https://github.com/hendrywilliam/ragdcbot",
  },
];

const writing = [
  {
    title: "Post Title One",
    description: "A short description of the post.",
    url: "/writing/post-one",
  },
  {
    title: "Post Title Two",
    description: "A short description of the post.",
    url: "/writing/post-two",
  },
];

const skills = [
  {
    title: "Languages",
    description: "Typescript, Golang, Python, SQL.",
  },
  {
    title: "Frameworks",
    description: "Next.js, Nuxt.js, Express.js, Gin, React.js, Vue.js.",
  },
  {
    title: "Databases",
    description: "PostgreSQL, Redis.",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Docker, Kubernetes, Linux Administration, Helm, HAProxy, Traefik, CertManager.",
  },
  {
    title: "Others",
    description:
      "Github Actions (CI/CD), Cloudflare (R2, Worker, Domains, WAF), HTML, CSS, Tailwind, Pug, Sass, Git.",
  },
];

const certifications = [
  {
    title: "Kubernetes Networking and Security using Calico",
    description: "Project Calico, issued Jun 2026.",
    url: "https://courses.academy.tigera.io/certificates/2de6066e2c754d84b4ee7aba704eb5b4",
  },
];
</script>

<template>
  <div
    class="mx-auto max-w-[692px] px-6 py-12 font-inter antialiased sm:py-32 md:py-16"
  >
    <header class="mb-32 flex flex-col items-start">
      <p class="inline-block font-medium no-underline">Hendri William T.</p>
      <!-- <span class="font-medium leading-none text-neutral-500">Software Developer</span> -->
    </header>

    <main>
      <!-- <span class="mb-5 block font-medium sm:mb-6">Today</span> -->
      <p class="text-neutral-600">
        I am a software developer. My interests span across a range of fields,
        including web development, human-computer interaction, data, finance,
        and cloud computing.
      </p>
      <!-- <p class="mt-4 text-neutral-600">
        Previously, I worked at...
      </p> -->
      <div class="-mb-3 mt-16 sm:mt-32">
        <span class="mb-5 block font-medium sm:mb-4">Experiences</span>
        <div class="flex flex-col gap-7 sm:gap-4">
          <p
            v-for="experience in experiences"
            :key="experience.name"
            class="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-neutral-100 sm:py-3"
          >
            <span>{{ experience.title }}</span>
            <span class="text-neutral-500">{{ experience.level }}</span>
            <span class="text-neutral-500 mt-4">{{
              experience.description
            }}</span>
          </p>
        </div>
      </div>

      <div class="-mb-3 mt-16 sm:mt-32">
        <span class="mb-5 block font-medium sm:mb-4">Projects</span>
        <div class="flex flex-col gap-7 sm:gap-4">
          <a
            v-for="project in projects"
            :key="project.name"
            :href="project.url"
            target="_blank"
            class="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-neutral-100 sm:py-3"
          >
            <span>{{ project.name }}</span>
            <span class="text-neutral-500">{{ project.description }}</span>
          </a>
        </div>
      </div>

      <div class="-mb-3 mt-16 sm:mt-32">
        <span class="mb-5 block font-medium sm:mb-4">Thoughts</span>
        <div class="flex flex-col gap-7 sm:gap-4">
          <a
            v-for="post in writing"
            :key="post.title"
            :href="post.url"
            class="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-neutral-100 sm:py-3"
          >
            <span>{{ post.title }}</span>
            <span class="text-neutral-500">{{ post.description }}</span>
          </a>
        </div>
      </div>

      <div class="-mb-3 mt-16 sm:mt-32">
        <span class="mb-5 block font-medium sm:mb-4">Skills</span>
        <div class="flex flex-col gap-7 sm:gap-4">
          <div
            v-for="post in skills"
            :key="post.title"
            class="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-neutral-100 sm:py-3"
          >
            <span>{{ post.title }}</span>
            <span class="text-neutral-500">{{ post.description }}</span>
          </div>
        </div>
      </div>

      <div class="-mb-3 mt-16 sm:mt-32">
        <span class="mb-5 block font-medium sm:mb-4">Certifications</span>
        <div class="flex flex-col gap-7 sm:gap-4">
          <a
            v-for="cert in certifications"
            :key="cert.title"
            :href="cert.url"
            target="_blank"
            class="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-neutral-100 sm:py-3"
          >
            <span>{{ cert.title }}</span>
            <span class="text-neutral-500">{{ cert.description }}</span>
          </a>
        </div>
      </div>

      <div class="mt-16 sm:mt-32">
        <!-- <span class="mb-5 block font-medium sm:mb-6">More</span> -->
        <span class="text-neutral-600">
          You can find all of my unfinished projects in
          <a
            class="underline"
            href="https://github.com/hendrywilliam"
            target="_blank"
            >GitHub</a
          >.
        </span>
      </div>
    </main>
  </div>
</template>
