<template>
  <layout-work
    :image-source="Pantallazo"
    :image-height="workImageHeight.PANTALLAZO"
    :image-data="$t('common.images.dataPantallazoImage')"
    :business-name="$t('common.works.pantallazo.name')"
    :business-role="$t('common.works.pantallazo.title')"
    :business-period="$t('common.works.pantallazo.period')"
  >
    <h3>{{ $t('views.works.pantallazo.title') }}</h3>
    <p>
      {{ $t('views.works.pantallazo.intro') }}
    </p>
    <h4>{{ $t('views.works.pantallazo.coolProjects') }}</h4>
    <ul>
      <li>
        <strong>{{ $t('views.works.pantallazo.posTitle') }}</strong
        >{{ $t('views.works.pantallazo.pos') }}
      </li>
      <li>
        <strong>{{ $t('views.works.pantallazo.wordpressTitle') }}</strong>
        {{ $t('views.works.pantallazo.wordpress') }}
      </li>
    </ul>
  </layout-work>
</template>

<script lang="ts" setup>
import LayoutWork from '@/components/common/layouts/LayoutWork.vue';
import Pantallazo from '@/assets/img/pantallazo.webp';

import { workImageHeight } from '@/models/ImagesHeight';
</script>

<style lang="scss" scoped>
//styles
</style>
