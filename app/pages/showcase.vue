<script setup lang="ts">
const successStories = [
  {
    name: 'Pagoda',
    country: 'Europe',
    icon: 'i-lucide-building',
    sector: 'Enterprise',
    description: 'Enterprise-wide business intelligence implementation.',
    image: '/img/showcase/asimmetriade.png'
  },
  {
    name: 'ASL Foggia',
    country: 'Italy',
    icon: 'i-lucide-hospital',
    sector: 'Healthcare',
    description: 'Advanced healthcare analytics for patient care optimization and resource management.',
    image: '/img/showcase/cogs.png'
  },
  {
    name: 'Emilia-Romagna Regional Labor Agency',
    country: 'Italy',
    icon: 'i-lucide-briefcase',
    sector: 'Public Administration',
    description: 'Labor market analytics for employment trends and workforce planning.',
    image: '/img/showcase/kidneys.png'
  },
  {
    name: 'Confcommercio',
    country: 'Italy',
    icon: 'i-lucide-store',
    sector: 'Commerce',
    description: 'Retail analytics for regional commerce associations.',
    image: '/img/showcase/mimoide.png'
  },
  {
    name: 'Fiat Research Center',
    country: 'Italy',
    icon: 'i-lucide-car',
    sector: 'Automotive',
    description: 'R&D analytics for automotive innovation and product development.',
    image: '/img/showcase/predator.png'
  },
  {
    name: 'Modena Local Public Health Authority',
    country: 'Italy',
    icon: 'i-lucide-heart-pulse',
    sector: 'Healthcare',
    description: 'Public health monitoring and epidemiological analysis.',
    image: '/img/showcase/rings.png'
  },
  {
    name: 'ENAV',
    country: 'Italy',
    icon: 'i-lucide-plane',
    sector: 'Aviation',
    description: 'Air traffic management analytics and operational dashboards.',
    image: '/img/showcase/simmetriade.png'
  },
  {
    name: 'COVID-19 DataViz and Analysis',
    country: 'Global',
    icon: 'i-lucide-activity',
    sector: 'Research',
    description: 'Pandemic data visualization and epidemiological tracking.',
    image: '/img/showcase/solaris.png'
  }
]

useSeoMeta({
  title: 'KNOWAGE Showcase',
  ogTitle: 'KNOWAGE Showcase',
  description: 'Discover success stories and dashboards built with KNOWAGE',
  ogDescription: 'Discover success stories and dashboards built with KNOWAGE'
})
</script>

<template>
  <div>
    <!-- Hero Section with 3D Screenshots -->
    <div class="relative">
      <Screenshot3d />
      <div class="absolute inset-0 bg-linear-to-b from-transparent via-transparent " />
    </div>

    <UContainer>
      <UPageBody>
        <UPageSection
          title="Success Stories"
          description="Discover how organizations across different sectors have leveraged KNOWAGE to transform their data into actionable insights."
        >
          <UBlogPosts>
            <UBlogPost
              v-for="story in successStories"
              :key="story.name"
              :title="story.name"
              :description="story.description"
              :image="story.image"
              :badge="{ label: story.sector, color: 'primary' }"
              orientation="vertical"
              variant="naked"
              :ui="{
                description: 'line-clamp-2'
              }"
            >
              <template #date>
                <div class="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                  <UIcon
                    name="i-lucide-map-pin"
                    class="w-4 h-4"
                  />
                  <span>{{ story.country }}</span>
                </div>
              </template>
            </UBlogPost>
          </UBlogPosts>
        </UPageSection>
      </UPageBody>
    </UContainer>
  </div>
</template>
