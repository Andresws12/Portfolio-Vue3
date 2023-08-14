<template>
  <RouterView />
  <loading-component v-if="true" />
  <button-translation />
</template>

<script lang="ts" setup>
import LoadingComponent from '@/components/common/LoadingComponent.vue';
import ButtonTranslation from '@/components/common/ButtonTranslation.vue';
</script>

<style lang="scss" scoped>
// App styles
</style>
