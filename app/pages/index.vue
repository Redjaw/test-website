<template>
  <div>
    <UPageHero
      title="KNOWAGE"
      description="KNOWAGE is the most comprehensive open source Business Intelligence suite for data analytics. Designed to meet both traditional and innovative requirements of complex data domains."
      headline="New release 9.0"
      :links="links"
    >
      <img
        src="/img/home/hero.jpg"
        alt="App screenshot"
        class="rounded-lg shadow-2xl w-full ring ring-default"
      />
    </UPageHero>

    <UPageSection
      title="Open & Customizable"
      description="KNOWAGE meets the standars of modern Business Intelligence solutions, providing a wide set of analytical features and a high level of customization to fit every business need. Thanks to its open-source nature and adoption of open standards, KNOWAGE can be used stand-alone or be seamlessly integrated into third-party applications."
      orientation="horizontal"
    >
      <img
        src="/img/home/open&custom.jpg"
        alt="Illustration"
        class="w-full rounded-lg"
      />
    </UPageSection>

    <UPageSection
      title="Different Editions for Different Needs"
      description="KNOWAGE is available in different editions to meet the needs of various users, from individual analysts to large enterprises. Choose the edition that best fits your requirements and start leveraging the power of data today."
      orientation="horizontal"
      reverse
    >
      <img
        src="/img/home/editions.jpg"
        alt="Illustration"
        class="w-full rounded-lg"
      />
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
            'Work on every Operating System, on premise or in the cloud. From desktop to mobile devices.',
        },
        {
          icon: 'material-symbols:database',
          title: 'Any Data',
          description:
            'Combine data coming from rbdms, big data, NoSql, open data, Solr indexes, flat files and external data services.',
        },
        {
          icon: 'material-symbols:cloud',
          title: 'Cloud Ready',
          description:
            'Usable in any Cloud environment in IaaS mode of find it in the major marketplaces.',
        },
        {
          icon: 'material-symbols:dashboard-customize-outline',
          title: 'Customizable',
          description:
            'Create the best solution according to your needs combining themes and analitical features.',
        },
        {
          icon: 'material-symbols:person-pin-outline-sharp',
          title: 'User Centric',
          description:
            'Build your analysis in autonomy, explore and organize your own data space thanks to advanced self-service features.',
        },
        {
          icon: 'mdi:inbox-multiple',
          title: 'Multitenant',
          description:
            'Activate different virtual instances to support multi-company, multi-department or multi-user scenarios.',
        },
      ]"
    />
  </div>
</template>
<script setup lang="ts">
const links = ref([
  {
    label: 'Get started',
    to: 'https://knowage-suite.readthedocs.io/en/9.0/chapter_5/index.html',
    icon: 'i-lucide-square-play',
  },
  {
    label: 'Learn more',
    to: '#',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right',
  },
])
</script>
