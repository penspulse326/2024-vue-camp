<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <main class="f-center h-[100dvh] bg-gradient-to-b from-secondary to-primary">
    <div class="container mx-auto px-2 md:px-0">
      <div class="f-center mb-8">
        <LogoLink />
      </div>
      <RouterView />
    </div>
  </main>
</template>
