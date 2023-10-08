<template>
  <button class="button button-translations" @click="changeLanguage()">
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
  text-transform: uppercase;

  &__locale {
    margin-left: 8px;
  }
}
</style>
