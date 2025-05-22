<script setup lang="ts">
const props = defineProps<{ label: string }>();
</script>

<template>
  <span class="shared-badge">
    {{ props.label }}
  </span>
</template>

<style scoped>
.shared-badge {
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
}
</style>
