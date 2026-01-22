<template>
  <footer class="py-6 border-t border-gray-200 dark:border-gray-800">
    <div class="container mx-auto px-4 flex items-center justify-between">
      <p class="text-sm text-muted">
        Knowage-Labs • © {{ new Date().getFullYear() }}
      </p>

      <UButton
        to="https://github.com/KnowageLabs/Knowage-Server"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="neutral"
        variant="ghost"
      />
    </div>
  </footer>
</template>
