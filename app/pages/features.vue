<script setup lang="ts">
const mainFeatures = [
  {
    id: 'dashboards',
    icon: 'i-lucide-layout-dashboard',
    title: 'Interactive Dashboards',
    description: 'A dashboard in Knowage transforms data into visual insights, enabling real-time monitoring, analysis, and strategic decision-making.',
    details: [
      'Combine data from multiple sources and datasets into a unified analysis environment',
      'Wide range of widgets: charts, tables, pivot, text, images, filters, maps, and custom code',
      'Location Intelligence capabilities with multi-layered maps',
      'Support for Solr indexes to analyze both structured data and text'
    ]
  },
  {
    id: 'reporting',
    icon: 'i-lucide-file-text',
    title: 'Reporting',
    description: 'Knowage reporting enables structured, customizable documents from data, supporting analysis, distribution, and decision-making.',
    details: [
      'Creation and distribution of static reports with pixel-perfect layouts',
      'Reports accessed online or automatically sent via email on schedule',
      'Multiple formats: PDF, CSV, XLS, RTF, and XLSX',
      'Powerful scheduler for offline report generation'
    ]
  },
  {
    id: 'dossier',
    icon: 'i-lucide-folder-open',
    title: 'Automatic Dossier',
    description: 'Compile reports into a single Word or PowerPoint document for meetings or publications.',
    details: [
      'Define Word or PowerPoint templates with designated placeholders',
      'Automatically populated with reports based on execution date',
      'Ready-to-edit draft with one click'
    ]
  },
  {
    id: 'qbe',
    icon: 'i-lucide-search',
    title: 'Visual Data Exploration (QbE)',
    description: 'Query by Example enables intuitive and unrestricted data exploration within the data space.',
    details: [
      'Empowers context-aware users to directly query data',
      'Save query results as new datasets or store for future execution',
      'Supports self-service and ad hoc reporting'
    ]
  },
  {
    id: 'selfservice',
    icon: 'i-lucide-user-cog',
    title: 'Self-Service & Ad-Hoc Reporting',
    description: 'KNOWAGE fully supports self-service data access and ad-hoc reporting, balancing user autonomy with robust security.',
    details: [
      'Personal Workspace to independently organize data and analyses',
      'Upload new files and design customized views',
      'Combine datasets and widgets to build your own dashboards'
    ]
  },
  {
    id: 'dataviz',
    icon: 'i-lucide-bar-chart-3',
    title: 'Advanced Data Visualization',
    description: 'Modern data analysis requires flexibility and openness to custom code.',
    details: [
      'Wide range of open widgets for advanced components',
      'Use HTML, third-party libraries, or Python code',
      'Rich gallery of pre-packaged widgets included'
    ]
  },
  {
    id: 'kpi',
    icon: 'i-lucide-gauge',
    title: 'Performance Management',
    description: 'Define Key Performance Indicators (KPIs) with threshold settings, scheduled evaluations, and native publication.',
    details: [
      'KPI definition with threshold settings',
      'Scheduled evaluations',
      'System of targeted alerts and notifications'
    ]
  },
  {
    id: 'multitenant',
    icon: 'i-lucide-building',
    title: 'Multi-tenant',
    description: 'KNOWAGE supports IT teams in managing complex enterprise environments with multitenancy and rich metadata structures.',
    details: [
      'Manage multiple tenants in a single installation',
      'Empowers individual users to freely explore their own data space',
      'Bi-modal approach and fast prototyping practices'
    ]
  },
  {
    id: 'assistant',
    icon: 'i-lucide-bot',
    title: 'Virtual Assistant',
    description: 'An intelligent, conversational interface designed to help users interact seamlessly with the KNOWAGE suite.',
    details: [
      'Real-time support by answering questions',
      'Dashboard navigation assistance',
      'Natural language processing for context-aware responses'
    ]
  }
]
</script>

<template>
  <div>
    <UPageHero
      title="Product Features"
      description="KNOWAGE provides a comprehensive set of analytical features to cover all modern Business Intelligence needs, from traditional reporting to advanced analytics and big data exploration."
    />

    <!-- Feature Sections -->
    <template
      v-for="(feature, index) in mainFeatures"
      :key="feature.id"
    >
      <UPageSection
        :id="feature.id"
        :title="feature.title"
        :description="feature.description"
        orientation="horizontal"
        :reverse="index % 2 === 1"
        :ui="{ container: 'py-8 sm:py-10' }"
      >
        <UCard :ui="{ body: 'p-5' }">
          <div class="flex items-center gap-3 mb-4">
            <div class="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
              <UIcon
                :name="feature.icon"
                class="w-7 h-7 text-primary-600 dark:text-primary-400"
              />
            </div>
            <h3 class="text-xl font-semibold">
              Key Capabilities
            </h3>
          </div>
          <ul class="space-y-2">
            <li
              v-for="detail in feature.details"
              :key="detail"
              class="flex items-start gap-2"
            >
              <UIcon
                name="i-lucide-check"
                class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
              />
              <span class="text-gray-600 dark:text-gray-300">{{ detail }}</span>
            </li>
          </ul>
        </UCard>
      </UPageSection>
    </template>

    <!-- Services Section -->
    <UPageSection
      id="services"
      title="Consultancy Services"
      description="Expert support to help you succeed with your Business Intelligence projects."
      :ui="{ container: 'py-8 sm:py-10' }"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <!-- Training -->
        <UCard :ui="{ body: 'p-5' }">
          <div class="flex items-center gap-3 mb-4">
            <div class="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <UIcon
                name="i-lucide-graduation-cap"
                class="w-7 h-7 text-blue-600 dark:text-blue-400"
              />
            </div>
            <h3 class="text-xl font-semibold">
              Training
            </h3>
          </div>
          <div class="space-y-3">
            <p class="text-gray-600 dark:text-gray-300">
              Our standard training provides basic and advanced knowledge on the entire range of analyses that can be performed with KNOWAGE.
            </p>
            <p class="text-gray-600 dark:text-gray-300">
              Training alternates theory and hands-on sessions based on real use cases. All courses are provided with a certificate of completion.
            </p>
          </div>
          <div class="flex items-center gap-2 text-sm text-gray-500 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <UIcon
              name="i-lucide-award"
              class="w-4 h-4"
            />
            <span>Certificate of completion included</span>
          </div>
        </UCard>

        <!-- Consulting -->
        <UCard :ui="{ body: 'p-5' }">
          <div class="flex items-center gap-3 mb-4">
            <div class="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <UIcon
                name="i-lucide-lightbulb"
                class="w-7 h-7 text-purple-600 dark:text-purple-400"
              />
            </div>
            <h3 class="text-xl font-semibold">
              Consulting
            </h3>
          </div>
          <div class="space-y-3">
            <p class="text-gray-600 dark:text-gray-300">
              Our consultancy services support you during the whole analytical process, from the first prototype to development, implementation, integration with other tools and periodic health checks.
            </p>
            <p class="text-gray-600 dark:text-gray-300 font-medium">
              KNOWAGE services help you saving money and time while reaching your business goals.
            </p>
          </div>
          <div class="flex items-center gap-2 text-sm text-gray-500 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <UIcon
              name="i-lucide-check-circle"
              class="w-4 h-4"
            />
            <span>Full project lifecycle support</span>
          </div>
        </UCard>
      </div>
    </UPageSection>

    <!-- CTA -->
    <UPageSection
      title="Ready to explore KNOWAGE?"
      description="Get started with KNOWAGE today and unlock the full potential of your data."
      :ui="{ container: 'py-8 sm:py-10' }"
    >
      <div class="flex justify-center gap-4">
        <UButton
          to="https://knowage-suite.readthedocs.io/en/9.0/chapter_5/index.html"
          target="_blank"
          size="xl"
          icon="i-lucide-play-circle"
          label="Get Started"
        />
        <UButton
          to="/editions"
          size="xl"
          color="neutral"
          variant="subtle"
          label="View Editions"
          trailing-icon="i-lucide-arrow-right"
        />
      </div>
    </UPageSection>
  </div>
</template>
