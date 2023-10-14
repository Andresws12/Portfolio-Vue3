<template>
  <section data-cy="home-section" class="home-work-experience">
    <h2>Check Out My Work Adventure! 🚀</h2>
    <div class="home-work-experience__cads">
      <common-card
        :image-source="Iskaypet"
        image-data="Test"
        image-height="58"
        text-title="Iskaypet"
        text-subtitle="Front-End Software Engineer"
        text-description="nov. 2021 - actualidad · 2 años"
        is-active
        @click="console.log('test')"
      />
      <common-card
        :image-source="Cloudappi"
        image-data="Test"
        image-height="177"
        text-title="CloudAPPi"
        text-subtitle="Front-End Software Engineer"
        text-description="mar. 2021 - nov. 2021 · 9 meses"
        @click="console.log('test')"
      />
      <common-card
        :image-source="star"
        image-data="Test"
        image-height="129"
        text-title="Star"
        text-subtitle="Front-End Software Engineer"
        text-description="feb. 2019 - feb. 2021 · 2 años 1 mes"
        @click="console.log('test')"
      />
      <common-card
        :image-source="Pantallazo"
        image-data="Test"
        image-height="96"
        text-title="Pantallazo Azul"
        text-subtitle="Front-End Software Engineer"
        text-description="ago. 2018 - feb. 2019 · 7 meses"
        @click="console.log('test')"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import CommonCard from '@/components/common/CommonCard.vue';
import Iskaypet from '@/assets/img/iskaypet.webp';
import Cloudappi from '@/assets/img/cloudappi.webp';
import star from '@/assets/img/star.webp';
import Pantallazo from '@/assets/img/pantallazo.webp';
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
