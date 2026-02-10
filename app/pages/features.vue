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
    id: 'assistant',
    icon: 'i-lucide-bot',
    title: 'Virtual Assistant',
    description: 'An intelligent, conversational interface designed to help users interact seamlessly with the KNOWAGE suite.',
    details: [
      'Real-time support by answering questions',
      'Dashboard navigation assistance',
      'Natural language processing for context-aware responses'
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
      <!-- First 3 features: two-column layout (50/50) with alternating order -->
      <template v-if="index < 3">
        <UPageSection
          :id="feature.id"
          :ui="{ container: 'py-8 sm:py-10' }"
        >
          <div :class="['grid grid-cols-2 gap-8', index % 2 === 1 && 'grid-cols-reverse']">
            <!-- Content column: title, description, details -->
            <div :class="{ 'order-2': index % 2 === 1 }">
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {{ feature.title }}
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {{ feature.description }}
              </p>
              <div>
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
                      class="w-5 h-5 text-green-500 mt-0.5 shrink-0"
                    />
                    <span class="text-gray-600 dark:text-gray-300">{{ detail }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Image column -->
            <div class="flex items-center justify-center" :class="{ 'order-1': index % 2 === 1 }">
              <div class="w-full h-96 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <slot :name="`image-${feature.id}`">
                  <span class="text-gray-500 dark:text-gray-400">Image slot for {{ feature.title }}</span>
                </slot>
              </div>
            </div>
          </div>
        </UPageSection>
      </template>

      <!-- Other features: original layout -->
      <template v-else>
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
                  class="w-5 h-5 text-green-500 mt-0.5 shrink-0"
                />
                <span class="text-gray-600 dark:text-gray-300">{{ detail }}</span>
              </li>
            </ul>
          </UCard>
        </UPageSection>
      </template>
    </template>

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
