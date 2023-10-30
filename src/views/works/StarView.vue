<template>
  <layout-work
    :image-source="star"
    :image-height="workImageHeight.STAR"
    :image-data="$t('common.images.dataStarImage')"
    :business-name="$t('common.works.star.name')"
    :business-role="$t('common.works.star.title')"
    :business-period="$t('common.works.star.period')"
  >
    <h3>{{ $t('views.works.star.title') }}</h3>
    <p>
      {{ $t('views.works.star.intro') }}
    </p>
    <h4>{{ $t('views.works.star.coolProjects') }}</h4>
    <ul>
      <li>
        <strong>{{ $t('views.works.star.smartSearchTitle') }}</strong
        >{{ $t('views.works.star.smartSearch') }}
      </li>
      <li>
        <strong>{{ $t('views.works.star.techServiceTitle') }}</strong>
        {{ $t('views.works.star.techService') }}
      </li>
      <li>
        <strong>{{ $t('views.works.star.smartSearchTitle') }}</strong>
        {{ $t('views.works.star.smartSearch') }}
      </li>
      <li>
        <strong>{{ $t('views.works.star.dataManagerTitle') }}</strong>
        {{ $t('views.works.star.dataManager') }}
      </li>
      <li>
        <strong>{{ $t('views.works.star.wholesaleTitle') }}</strong>
        {{ $t('views.works.star.wholesale') }}
      </li>
    </ul>
  </layout-work>
</template>

<script lang="ts" setup>
import LayoutWork from '@/components/common/layouts/LayoutWork.vue';
import star from '@/assets/img/star.webp';

import { workImageHeight } from '@/models/ImagesHeight';
</script>

<style lang="scss" scoped>
//styles
</style>
