<script setup lang="ts">
const experiences = [
  {
    title: "PT Biznet Gio Nusantara",
    level: "Software Engineer I",
    description:
      "Contributed to multiple products. Developed backend services/endpoints, API integrations and interfaces. Collaborated with cross-functional teams to improve product functionality and user experience.",
  },
];

const skills = [
  {
    title: "Languages",
    description: "Typescript, Golang, Python, SQL, Cypher (GraphDB)",
  },
  {
    title: "Databases",
    description: "PostgreSQL, Redis, Neo4j AuraDB (GraphDB)",
  },
  {
    title: "Others",
    description: "Docker, Kubernetes.",
  },
];

const certifications = [
  {
    title: "Kubernetes Networking and Security using Calico",
    description: "Project Calico, issued Jun 2026.",
    url: "https://courses.academy.tigera.io/certificates/2de6066e2c754d84b4ee7aba704eb5b4",
  },
  {
    title: "Neo4j Certified Professional",
    description:
      "Covering graph database fundamentals, Cypher™ query statement, graph data modeling, nodes and relationship and database operations.",
    url: "https://graphacademy.neo4j.com/c/e516dfa3-7162-42f8-97c0-f4e682086da6",
  },
];
</script>

<template>
  <div
    class="mx-auto max-w-[692px] px-6 py-12 font-inter antialiased sm:py-32 md:py-16 text-justify"
  >
    <header class="mb-32 flex flex-col items-start">
      <p class="inline-block font-medium no-underline">Hendri William</p>
    </header>

    <main>
      <p class="text-neutral-600">
        I am a software developer. My interests span across a range of fields,
        including web development, human-computer interaction, data, finance,
        and cloud computing.
      </p>
      <div class="-mb-3 mt-16 sm:mt-32">
        <span class="mb-5 block font-medium sm:mb-4">Experiences</span>
        <div class="flex flex-col gap-7 sm:gap-4">
          <p
            v-for="experience in experiences"
            :key="experience.title"
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
    </main>
  </div>
</template>
