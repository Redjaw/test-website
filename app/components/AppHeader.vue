<script setup lang="ts">
const items = computed(() => [
  {
    label: 'Features',
    to: '/features'
  },
  {
    label: 'Editions',
    to: '/editions'
  },
  {
    label: 'Showcase',
    to: '/showcase'
  },
  {
    label: 'About Us',
    to: '/aboutus'
  }
])
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>
      <TemplateMenu />
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
    />

    <template #right>
      <UColorModeButton class="cursor-pointer" />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>
