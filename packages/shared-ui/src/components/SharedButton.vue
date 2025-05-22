<script setup lang="ts"></script>

<template>
  <button type="button" class="shared-button">
    <slot />
  </button>
</template>

<style scoped>
.shared-button {
  background-color: green;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
}
</style>
