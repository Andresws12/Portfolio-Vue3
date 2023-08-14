<template>
  <div class="bouncing-ball-container">
    <div class="bouncing-ball"></div>
  </div>
</template>

<script setup lang="ts">
// code
</script>

<style lang="scss" scoped>
$background-ball: #3498db;

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-30px);
  }

  60% {
    transform: translateY(-15px);
  }
}

.bouncing-ball {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: $background-ball;
  position: absolute;
  bottom: 0;
  animation: bounce 2s infinite;
}
</style>
