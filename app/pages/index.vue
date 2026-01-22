<template>
  <div>
    <!-- Hero with background image -->
    <div
      class="relative bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url('${bgUrl}')` }"
    >
      <div class="absolute inset-0 bg-white/80 dark:bg-gray-900/80" />
      <div class="relative">
        <UPageHero
          title="KNOWAGE"
          description="KNOWAGE is the most comprehensive open source Business Intelligence suite for data analytics. Designed to meet both traditional and innovative requirements of complex data domains."
          headline="New release 9.0"
          :links="links as any"
        />
      </div>
    </div>

    <UPageSection
      title="Open & Customizable"
      description="KNOWAGE meets the standards of modern Business Intelligence solutions, providing a wide set of analytical features and a high level of customization to fit every business need. Thanks to its open-source nature and adoption of open standards, KNOWAGE can be used stand-alone or be seamlessly integrated into third-party applications."
      orientation="horizontal"
    >
      <img
        :src="`${baseNormalized}/img/home/open&custom.jpg`"
        alt="Illustration"
        class="w-full rounded-lg"
      >
    </UPageSection>

    <UPageSection
      title="Different Editions for Different Needs"
      description="KNOWAGE is available in different editions to meet the needs of various users, from individual analysts to large enterprises. Choose the edition that best fits your requirements and start leveraging the power of data today."
      orientation="horizontal"
      reverse
    >
      <img
        :src="`${baseNormalized}/img/home/editions.jpg`"
        alt="Illustration"
        class="w-full rounded-lg"
      >
    </UPageSection>

    <UPageSection
      id="features"
      title="Everything you need to build your Data Visualizations"
      description="KNOWAGE provides a wide set of analytical features to cover all the modern Business Intelligence needs, from traditional reporting to advanced analytics and big data exploration."
      :features="[
        {
          icon: 'material-symbols:devices-outline',
          title: 'Any Platform',
          description:
            'Work on every Operating System, on premise or in the cloud. From desktop to mobile devices.'
        },
        {
          icon: 'material-symbols:database',
          title: 'Any Data',
          description:
            'Combine data coming from rbdms, big data, NoSql, open data, Solr indexes, flat files and external data services.'
        },
        {
          icon: 'material-symbols:cloud',
          title: 'Cloud Ready',
          description:
            'Usable in any Cloud environment in IaaS mode of find it in the major marketplaces.'
        },
        {
          icon: 'material-symbols:dashboard-customize-outline',
          title: 'Customizable',
          description:
            'Create the best solution according to your needs combining themes and analitical features.'
        },
        {
          icon: 'material-symbols:person-pin-outline-sharp',
          title: 'User Centric',
          description:
            'Build your analysis in autonomy, explore and organize your own data space thanks to advanced self-service features.'
        },
        {
          icon: 'mdi:inbox-multiple',
          title: 'Multitenant',
          description:
            'Activate different virtual instances to support multi-company, multi-department or multi-user scenarios.'
        }
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type HeroLink = {
  label: string
  to: string
  icon?: string
  color?: string
  variant?: string
  trailingIcon?: string
}

const runtimeConfig = useRuntimeConfig()
const base = runtimeConfig?.app?.baseURL ?? '/'
const baseNormalized = base.endsWith('/') ? base.slice(0, -1) : base
const bgUrl = `${baseNormalized}/img/home/background-homepage.png`
// links typed as HeroLink[] to match UPageHero expected shape at runtime
const links = ref<HeroLink[]>([
  {
    label: 'Get started',
    to: 'https://knowage-suite.readthedocs.io/en/9.0/chapter_5/index.html',
    icon: 'i-lucide-square-play'
  },
  {
    label: 'Learn more',
    to: '#',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  },
  {
    label: 'Release 9',
    to: '/v9',
    color: 'primary',
    icon: 'i-lucide-rocket'
  }
])
</script>
