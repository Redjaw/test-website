<template>
  <div>
    <UPageHero
      title="KNOWAGE"
      description="The Open Source Analytics and Business Intelligence Suite."
    />

    <UPageSection
      id="features"
      title="Everything you need to build your Data Visualizations"
      description="Start with a solid foundation. This template includes all the essentials for building production-ready applications with Nuxt UI's powerful component system."
      :features="[{
        icon: 'material-symbols:devices-outline',
        title: 'Any Platform',
        description: 'Work on every Operating System, on premise or in the cloud. From desktop to mobile devices.'
      }, {
        icon: 'material-symbols:database',
        title: 'Any Data',
        description: 'Combine data coming from rbdms, big data, NoSql, open data, Solr indexes, flat files and external data services.'
      }, {
        icon: 'material-symbols:cloud',
        title: 'Cloud Ready',
        description: 'Usable in any Cloud environment in IaaS mode of find it in the major marketplaces.'
      }, {
        icon: 'material-symbols:dashboard-customize-outline',
        title: 'Customizable',
        description: 'Create the best solution according to your needs combining themes and analitical features.'
      }, {
        icon: 'material-symbols:person-pin-outline-sharp',
        title: 'User Centric',
        description: 'Build your analysis in autonomy, explore and organize your own data space thanks to advanced self-service features.'
      }, {
        icon: 'mdi:inbox-multiple',
        title: 'Multitenant',
        description: 'Activate different virtual instances to support multi-company, multi-department or multi-user scenarios.'
      }]"
    />

    
  </div>
</template>
