<template>
  <button @click="changeLanguage()">
    <span>{{ $i18n.locale }}</span>
  </button>
</template>
<script lang="ts" setup>
import { changeLanguage } from '@/utils/functionUtils/localizationFunctions';
</script>
<style lang="scss" scoped>
.button-translations {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 20;
  padding-left: 10px;
  padding-right: 10px;
  text-transform: uppercase;

  &__locale {
    margin-left: 8px;
  }
}
</style>
