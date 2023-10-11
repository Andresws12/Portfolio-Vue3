<template>
  <section data-cy="home-section" class="home-description">
    <img
      class="home-description__image"
      src="@/assets/img/body.webp"
      :alt="$t('views.home.images.dataBodyImage')"
      :title="$t('views.home.images.dataBodyImage')"
      width="250"
      height="392"
    />
    <img
      class="home-description__image-blurred"
      src="@/assets/img/body.webp"
      :alt="$t('views.home.images.dataBodyImageBlurred')"
      :title="$t('views.home.images.dataBodyImageBlurred')"
      width="250"
      height="392"
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
  }

  &__image-blurred {
    position: absolute;
    z-index: 1;
    filter: blur(8px);
  }

  &__description-section {
    padding-bottom: 25px;
  }
}
</style>
