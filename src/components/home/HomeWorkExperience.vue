<template>
  <section data-cy="home-section" class="home-work-experience">
    <h2>{{ $t('views.home.homeWorkExperience.title') }}</h2>
    <div class="home-work-experience__cads">
      <common-card
        :image-source="Iskaypet"
        image-height="58"
        :image-data="$t('views.home.images.dataIskaypetImage')"
        :text-title="$t('views.home.homeWorkExperience.iskaypet.name')"
        :text-subtitle="$t('views.home.homeWorkExperience.iskaypet.title')"
        :text-description="$t('views.home.homeWorkExperience.iskaypet.period')"
        :call-to-action-button="
          $t('views.home.homeWorkExperience.callToActionButton')
        "
        :active-text-button="
          $t('views.home.homeWorkExperience.activeButtonText')
        "
        is-active
        @click="console.log('test')"
      />
      <common-card
        :image-source="Cloudappi"
        image-height="177"
        :image-data="$t('views.home.images.dataCloudappiImage')"
        :text-title="$t('views.home.homeWorkExperience.cloudappi.name')"
        :text-subtitle="$t('views.home.homeWorkExperience.cloudappi.title')"
        :text-description="$t('views.home.homeWorkExperience.cloudappi.period')"
        :call-to-action-button="
          $t('views.home.homeWorkExperience.callToActionButton')
        "
        @click="console.log('test')"
      />
      <common-card
        :image-source="star"
        image-height="129"
        :image-data="$t('views.home.images.dataStarImage')"
        :text-title="$t('views.home.homeWorkExperience.star.name')"
        :text-subtitle="$t('views.home.homeWorkExperience.star.title')"
        :text-description="$t('views.home.homeWorkExperience.star.period')"
        :call-to-action-button="
          $t('views.home.homeWorkExperience.callToActionButton')
        "
        @click="console.log('test')"
      />
      <common-card
        :image-source="Pantallazo"
        image-height="96"
        :image-data="$t('views.home.images.dataPantallazoImage')"
        :text-title="$t('views.home.homeWorkExperience.pantallazo.name')"
        :text-subtitle="$t('views.home.homeWorkExperience.pantallazo.title')"
        :text-description="
          $t('views.home.homeWorkExperience.pantallazo.period')
        "
        :call-to-action-button="
          $t('views.home.homeWorkExperience.callToActionButton')
        "
        @click="console.log('test')"
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
