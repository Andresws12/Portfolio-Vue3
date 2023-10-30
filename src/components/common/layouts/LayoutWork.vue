<template>
  <section class="layout-work">
    <article class="layout-work__business-data">
      <img
        :src="props.imageSource"
        :alt="props.imageData"
        :title="props.imageData"
        width="250"
        :height="props.imageHeight"
        class="layout-work__business-image"
      />
      <h1 class="layout-work__business-name">{{ businessName }}</h1>
      <h2 class="layout-work__business-role">{{ businessRole }}</h2>
      <p class="layout-work__business-period">{{ businessPeriod }}</p>
      <slot name="business-data" />
    </article>
    <article class="layout-work__personal-data">
      <slot />
    </article>
  </section>
</template>

<script lang="ts" setup>
export interface Props {
  imageSource: string;
  imageData: string;
  imageHeight: string;
  businessName: string;
  businessRole: string;
  businessPeriod: string;
  isActive?: boolean;
  activeTextButton?: string;
}

const props = withDefaults(defineProps<Props>(), {
  imageSource: '',
  imageData: '',
  imageHeight: '',
  businessName: '',
  businessRole: '',
  businessPeriod: '',
  isActive: false,
  activeTextButton: '',
});
</script>

<style lang="scss" scoped>
//styles
.layout-work {
  display: flex;
  padding: 100px 150px 55px;

  @include tablet {
    padding: 100px 25px 55px;
  }

  @include mobile {
    flex-direction: column;
  }

  &__business-data {
    padding: 25px;
    backdrop-filter: blur(5px);

    @include mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &__personal-data {
    padding: 25px;
    width: -webkit-fill-available;
    border-radius: 15px;
    background-color: $main-color;
    color: $main-color-dark;
    position: relative;
  }

  &__business-name {
    font-size: 1.5rem;
  }

  &__business-role {
    font-size: 1.25rem;
  }

  &__business-period {
    font-size: 1rem;
  }
}
</style>
