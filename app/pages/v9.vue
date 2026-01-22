<template>
  <div>
    <UPageHero
      title="Knowage 9 — Major Release"
      description="A major step forward: redesigned UX, faster engines, enhanced integrations and more."
    />

    <UPageSection class="py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h3 class="text-2xl font-bold mb-4">
              What&apos;s new in Knowage 9
            </h3>
            <ul class="space-y-4">
              <li class="flex gap-3 items-start">
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-50 text-green-600">
                  ✓
                </span>
                <div>
                  <strong>Performance:</strong>
                  <div class="text-gray-600">
                    Significant query engine improvements — dashboards load faster and handle larger datasets.
                  </div>
                </div>
              </li>

              <li class="flex gap-3 items-start">
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-50 text-green-600">
                  ✓
                </span>
                <div>
                  <strong>Modernized UI:</strong>
                  <div class="text-gray-600">
                    Refreshed components, accessibility improvements and responsive layout for all devices.
                  </div>
                </div>
              </li>

              <li class="flex gap-3 items-start">
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-50 text-green-600">
                  ✓
                </span>
                <div>
                  <strong>Integrations:</strong>
                  <div class="text-gray-600">
                    Better connectors for modern data platforms, improved Python and external tool integrations.
                  </div>
                </div>
              </li>

              <li class="flex gap-3 items-start">
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-50 text-green-600">
                  ✓
                </span>
                <div>
                  <strong>Enterprise features:</strong>
                  <div class="text-gray-600">
                    New multi-tenant controls, advanced scheduling and monitoring dashboards.
                  </div>
                </div>
              </li>
            </ul>

            <div class="mt-6 flex gap-3">
              <UButton
                to="/editions"
                label="Compare Editions"
              />
              <UButton
                to="https://github.com/KnowageLabs/Knowage-Server/"
                target="_blank"
                variant="subtle"
                color="neutral"
                label="View on GitHub"
              />
            </div>
          </div>

          <div>
            <!-- Aggressive rocket interface -->
            <div class="bg-black rounded-lg overflow-hidden shadow-lg text-white">
              <div class="relative">
                <img
                  src="/img/v9/rocket.jpeg"
                  alt="Rocket"
                  class="w-full h-64 object-cover"
                >

                <div class="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <div class="text-center px-6">
                    <h2 class="text-3xl font-extrabold tracking-wide">
                      Prepare for launch
                    </h2>
                    <p class="mt-2 text-lg opacity-90">
                      Knowage 9 is GO — blazing engines, battle-ready UI.
                    </p>
                    <div class="mt-4 flex items-center justify-center gap-3">
                      <UButton
                        to="#launch-sequence"
                        class="bg-red-600"
                        label="Launch Sequence"
                      />
                      <UButton
                        to="https://github.com/KnowageLabs/Knowage-Server/"
                        target="_blank"
                        variant="subtle"
                        color="neutral"
                        label="Release Notes"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-900">
                <div class="flex items-center justify-between text-sm">
                  <div class="font-medium">
                    Ready to go to space
                  </div>
                  <div class="text-green-400">
                    All systems nominal
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-4 text-sm text-muted">
              Release notes and migration guide are available on the repository.
            </div>
          </div>
        </div>
      </div>
    </UPageSection>

    <!-- Launch Sequence section: target for the Launch Sequence CTA -->
    <UPageSection
      id="launch-sequence"
      title="Launch Sequence"
      description="Follow the checklist to get Knowage 9 fully operational."
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-4 bg-white/5 rounded-lg">
          <h4 class="font-semibold mb-2">
            1. Pre-flight checks
          </h4>
          <p class="text-sm text-gray-300">
            Verify configurations, data connectors and permissions.
          </p>
        </div>
        <div class="p-4 bg-white/5 rounded-lg">
          <h4 class="font-semibold mb-2">
            2. Engine tuning
          </h4>
          <p class="text-sm text-gray-300">
            Apply performance settings and verify query plans.
          </p>
        </div>
        <div class="p-4 bg-white/5 rounded-lg">
          <h4 class="font-semibold mb-2">
            3. Lift-off
          </h4>
          <p class="text-sm text-gray-300">
            Roll out to production and monitor the telemetry dashboards.
          </p>
        </div>
      </div>

      <div class="mt-6 flex gap-3">
        <UButton
          to="/editions#comparison"
          label="Compare Editions"
        />
        <UButton
          to="https://github.com/KnowageLabs/Knowage-Server/releases"
          target="_blank"
          variant="subtle"
          color="neutral"
          label="View Releases"
        />
      </div>
    </UPageSection>
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

function scrollToHash(hash: string | undefined) {
  if (!hash) return
  const id = hash.replace(/^#/, '')
  nextTick(() => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

onMounted(() => {
  scrollToHash(route.hash)
})

watch(() => route.hash, (h) => {
  scrollToHash(h)
})
</script>
