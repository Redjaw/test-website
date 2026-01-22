<template>
  <div
    class="relative w-full h-[400px] bg-muted overflow-hidden flex justify-center"
  >
    <UMarquee
      reverse
      orientation="vertical"
      :overlay="false"
      :ui="{
        root: '[--duration:40s] absolute w-[460px] -left-[100px] -top-[300px] h-[940px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30'
      }"
    >
      <img
        v-for="(img, idx) in groups[0]"
        :key="`g0-${idx}`"
        :src="`${baseNormalized}/img/showcase/${img}`"
        width="460"
        height="258"
        :alt="`Showcase ${img}`"
        class="aspect-video border border-default rounded-lg bg-white"
      >
    </UMarquee>

    <UMarquee
      orientation="vertical"
      :overlay="false"
      :ui="{
        root: '[--duration:40s] absolute w-[460px] -top-[400px] left-[480px] h-[1160px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30'
      }"
    >
      <img
        v-for="(img, idx) in groups[1]"
        :key="`g1-${idx}`"
        :src="`${baseNormalized}/img/showcase/${img}`"
        width="460"
        height="258"
        :alt="`Showcase ${img}`"
        class="aspect-video border border-default rounded-lg bg-white"
      >
    </UMarquee>

    <UMarquee
      reverse
      orientation="vertical"
      :overlay="false"
      :ui="{
        root: 'hidden md:flex [--duration:40s] absolute w-[460px] -top-[300px] left-[1020px] h-[1060px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30'
      }"
    >
      <img
        v-for="(img, idx) in groups[2]"
        :key="`g2-${idx}`"
        :src="`${baseNormalized}/img/showcase/${img}`"
        width="460"
        height="258"
        :alt="`Showcase ${img}`"
        class="aspect-video border border-default rounded-lg bg-white"
      >
    </UMarquee>

    <UMarquee
      orientation="vertical"
      :overlay="false"
      :ui="{
        root: '[--duration:40s] absolute w-[460px] -top-[400px] left-[1660px] h-[1160px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30'
      }"
    >
      <img
        v-for="(img, idx) in groups[3]"
        :key="`g3-${idx}`"
        :src="`${baseNormalized}/img/showcase/${img}`"
        width="460"
        height="258"
        :alt="`Showcase ${img}`"
        class="aspect-video border border-default rounded-lg bg-white"
      >
    </UMarquee>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const runtimeConfig = useRuntimeConfig()
const base = runtimeConfig?.app?.baseURL ?? '/'
const baseNormalized = base.endsWith('/') ? base.slice(0, -1) : base

// Images present in public/img/showcase
// Keep the order as desired; this list was taken from the repository directory
const images = [
  'airbnb-analysis.png',
  'screenshot1.png',
  'screenshot2.png',
  'screenshot3.png',
  'screenshot4.png',
  'screenshot5.png',
  'screenshot6.png'
]

// Distribute images evenly across 4 marquees
const groups = computed(() => {
  const g: string[][] = [[], [], [], []]
  images.forEach((img, i) => {
    g[i % 4].push(img)
  })
  return g
})
</script>
