<script setup lang="ts">
const offices = [
  { city: 'Torino', country: 'Italy' },
  { city: 'Bologna', country: 'Italy' },
  { city: 'Rome', country: 'Italy' },
  { city: 'Belgrade', country: 'Republic of Serbia' }
]

const europeMapSrc
  = 'https://staticmap.openstreetmap.de/staticmap.php?center=47.0,13.0&zoom=4&size=1000x480&maptype=mapnik&markers=45.0703,7.6869,red-pushpin|44.4949,11.3426,red-pushpin|41.9028,12.4964,red-pushpin|44.7866,20.4489,red-pushpin'
</script>

<template>
  <UPageSection>
    <div class="mx-auto max-w-4xl space-y-8">
      <p class="text-lg text-gray-700 dark:text-gray-200">
        We are a group of professionals working side by side with the community to build better data experiences.
      </p>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">
          Product locations in Europe
        </h2>
        <img
          :src="europeMapSrc"
          alt="Map of Europe showing product locations in Torino, Bologna, Rome, and Belgrade"
          class="w-full rounded-lg border border-gray-200 dark:border-gray-700"
          loading="lazy"
        >
        <ul class="grid gap-2 sm:grid-cols-2 text-sm text-gray-600 dark:text-gray-300">
          <li
            v-for="office in offices"
            :key="office.city"
            class="rounded-md bg-gray-50 px-3 py-2 dark:bg-gray-800"
          >
            <strong>{{ office.city }}</strong> - {{ office.country }}
          </li>
        </ul>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">
          Contact us
        </h2>

        <form
          class="space-y-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700"
          @submit.prevent
        >
          <div class="space-y-2">
            <label
              for="contact-email"
              class="block text-sm font-medium"
            >Email</label>
            <input
              id="contact-email"
              type="email"
              required
              class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 dark:border-gray-600 dark:bg-gray-900"
              placeholder="name@example.com"
            >
          </div>

          <div class="space-y-2">
            <label
              for="contact-request"
              class="block text-sm font-medium"
            >What information do you need?</label>
            <textarea
              id="contact-request"
              required
              rows="4"
              class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 dark:border-gray-600 dark:bg-gray-900"
              placeholder="Tell us what you would like to know"
            />
          </div>

          <div class="space-y-2">
            <label
              for="contact-captcha"
              class="block text-sm font-medium"
            >Anti-spam captcha: what is 4 + 3?</label>
            <input
              id="contact-captcha"
              type="text"
              inputmode="numeric"
              required
              class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 dark:border-gray-600 dark:bg-gray-900"
              placeholder="Type your answer"
            >
          </div>

          <button
            type="submit"
            class="rounded-md bg-primary px-4 py-2 font-medium text-white hover:opacity-90"
          >
            Send request
          </button>
        </form>
      </section>
    </div>
  </UPageSection>
</template>
