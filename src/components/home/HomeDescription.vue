<template>
  <section data-cy="home-section" class="home-description">
    <img
      class="home-description__image"
      src="@/assets/img/body.webp"
      :alt="$t('common.images.dataBodyImage')"
      :title="$t('common.images.dataBodyImage')"
      width="230"
      height="360"
    />
    <article class="home-description__data">
      <h1 class="home-description__title">
        {{ $t('views.home.homeDescription.title') }}
      </h1>
      <h2 class="home-description__subtitle">
        {{ $t('views.home.homeDescription.subtitle') }}
      </h2>
      <p>
        <button-contact />
      </p>
      <div class="home-description__description-section">
        <p>{{ $t('views.home.homeDescription.descriptionWelcome') }}</p>
        <p>
          {{ $t('views.home.homeDescription.description') }}
        </p>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import ButtonContact from '@/components/common/ButtonContact.vue';
</script>

<style lang="scss" scoped>
//Styles
.home-description {
  display: flex;
  padding: 25px 200px 0;
  align-items: flex-end;

  @include tablet {
    padding: 25px 55px 0;
  }

  @include mobile {
    padding: 25px 25px 0;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-size: 1.75rem;
  }

  &__data {
    padding: 0 35px;

    @include mobile {
      padding: 0;
    }
  }

  &__image {
    z-index: 2;
    -webkit-filter: drop-shadow(0 0 90px $main-color);
    filter: drop-shadow(0 0 90px $main-color);
  }

  &__description-section {
    padding-bottom: 25px;
  }
}
</style>
