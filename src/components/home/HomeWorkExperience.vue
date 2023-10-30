<template>
  <section data-cy="home-section" class="home-work-experience">
    <h2>{{ $t('views.home.homeWorkExperience.title') }}</h2>
    <div class="home-work-experience__cads">
      <common-card
        :image-source="Iskaypet"
        :image-height="workImageHeight.ISKAYPET"
        :image-data="$t('common.images.dataIskaypetImage')"
        :text-title="$t('common.works.iskaypet.name')"
        :text-subtitle="$t('common.works.iskaypet.title')"
        :text-description="$t('common.works.iskaypet.period')"
        :call-to-action-button="
          $t('views.home.homeWorkExperience.callToActionButton')
        "
        :active-text-button="
          $t('views.home.homeWorkExperience.activeButtonText')
        "
        is-active
        @click="$router.push({ name: 'iskaypet' })"
      />
      <common-card
        :image-source="Cloudappi"
        :image-height="workImageHeight.CLOUDAPPI"
        :image-data="$t('common.images.dataCloudappiImage')"
        :text-title="$t('common.works.cloudappi.name')"
        :text-subtitle="$t('common.works.cloudappi.title')"
        :text-description="$t('common.works.cloudappi.period')"
        :call-to-action-button="
          $t('views.home.homeWorkExperience.callToActionButton')
        "
        @click="$router.push({ name: 'cloudappi' })"
      />
      <common-card
        :image-source="star"
        :image-height="workImageHeight.STAR"
        :image-data="$t('common.images.dataStarImage')"
        :text-title="$t('common.works.star.name')"
        :text-subtitle="$t('common.works.star.title')"
        :text-description="$t('common.works.star.period')"
        :call-to-action-button="
          $t('views.home.homeWorkExperience.callToActionButton')
        "
        @click="$router.push({ name: 'star' })"
      />
      <common-card
        :image-source="Pantallazo"
        :image-height="workImageHeight.PANTALLAZO"
        :image-data="$t('common.images.dataPantallazoImage')"
        :text-title="$t('common.works.pantallazo.name')"
        :text-subtitle="$t('common.works.pantallazo.title')"
        :text-description="$t('common.works.pantallazo.period')"
        :call-to-action-button="
          $t('views.home.homeWorkExperience.callToActionButton')
        "
        @click="$router.push({ name: 'pantallazo' })"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import CommonCard from '@/components/common/CommonCard.vue';

import Pantallazo from '@/assets/img/pantallazo.webp';
import Cloudappi from '@/assets/img/cloudappi.webp';
import Iskaypet from '@/assets/img/iskaypet.webp';
import star from '@/assets/img/star.webp';

import { workImageHeight } from '@/models/ImagesHeight';
</script>

<style lang="scss" scoped>
//Styles
.home-work-experience {
  padding: 25px;

  @include desktop-large {
    padding: 25px 200px;
  }

  &__cads {
    display: flex;
    overflow-x: auto;
  }
}
</style>
