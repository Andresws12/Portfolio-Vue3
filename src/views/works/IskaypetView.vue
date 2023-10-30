<template>
  <layout-work
    :image-source="Iskaypet"
    :image-height="workImageHeight.ISKAYPET"
    :image-data="$t('common.images.dataIskaypetImage')"
    :business-name="$t('common.works.iskaypet.name')"
    :business-role="$t('common.works.iskaypet.title')"
    :business-period="$t('common.works.iskaypet.period')"
  >
    <h3>{{ $t('views.works.iskaypet.title') }}</h3>
    <p>{{ $t('views.works.iskaypet.intro') }}</p>
    <h4>{{ $t('views.works.iskaypet.coolProjects') }}</h4>
    <ul>
      <li>
        <strong>{{ $t('views.works.iskaypet.ecommerceTitle') }}</strong>
        {{ $t('views.works.iskaypet.ecommerce') }}
      </li>
      <li>
        <strong>{{ $t('views.works.iskaypet.componentLibraryTitle') }}</strong>
        {{ $t('views.works.iskaypet.componentLibrary') }}
      </li>
      <li>
        <strong>{{ $t('views.works.iskaypet.ssrProjectTitle') }}</strong>
        {{ $t('views.works.iskaypet.ssrProject') }}
      </li>
    </ul>
  </layout-work>
</template>

<script lang="ts" setup>
import LayoutWork from '@/components/common/layouts/LayoutWork.vue';
import Iskaypet from '@/assets/img/iskaypet.webp';

import { workImageHeight } from '@/models/ImagesHeight';
</script>

<style lang="scss" scoped>
//styles
</style>
