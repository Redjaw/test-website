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

        <div class="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
          <iframe
            title="Europe map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-5.0%2C39.0%2C28.0%2C52.0&layer=mapnik"
            class="h-[460px] w-full"
            loading="lazy"
          />

          <div class="pointer-events-none absolute inset-0">
            <div class="absolute left-[35%] top-[37%] rounded-full bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow">
              Torino
            </div>
            <div class="absolute left-[47%] top-[44%] rounded-full bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow">
              Bologna
            </div>
            <div class="absolute left-[50%] top-[52%] rounded-full bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow">
              Rome
            </div>
            <div class="absolute left-[72%] top-[32%] rounded-full bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow">
              Belgrade
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">
          Contact us
        </h2>

        <form
          class="space-y-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700"
          action="mailto:knowage@eng.it"
          method="post"
          enctype="text/plain"
        >
          <div class="space-y-2">
            <label
              for="contact-email"
              class="block text-sm font-medium"
            >Email</label>
            <input
              id="contact-email"
              name="email"
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
              name="request"
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
              name="captcha"
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
