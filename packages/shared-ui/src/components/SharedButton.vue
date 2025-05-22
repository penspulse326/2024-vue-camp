<template>
  <button type="button" class="shared-button">
    <slot />
  </button>
</template>

<style scoped>
.shared-button {
  background-color: red;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
}
</style>
