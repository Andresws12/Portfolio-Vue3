<template>
  <section data-cy="home-section" class="home-description">
    <img
      class="home-description__image"
      src="@/assets/img/body.webp"
      :alt="$t('views.home.images.dataBodyImage')"
      :title="$t('views.home.images.dataBodyImage')"
      width="250"
      height="288"
    />
    <img
      class="home-description__image-blurred"
      src="@/assets/img/body.webp"
      :alt="$t('views.home.images.dataBodyImageBlurred')"
      :title="$t('views.home.images.dataBodyImageBlurred')"
      width="250"
      height="288"
    />
    <article class="home-description__data">
      <h1 class="home-description__title">
        {{ $t('views.home.homeDescription.title') }}
      </h1>
      <h2 class="home-description__subtitle">
        {{ $t('views.home.homeDescription.subtitle') }}
      </h2>
      <div class="home-description__description-section">
        <p>{{ $t('views.home.homeDescription.descriptionGreetings') }}</p>
        <p>
          {{ $t('views.home.homeDescription.descriptionWelcome') }}<br />{{
            $t('views.home.homeDescription.description')
          }}
        </p>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
// Code
</script>

<style lang="scss" scoped>
//Styles
.home-description {
  display: flex;
  padding: 25px 25px 0;
  align-items: flex-end;

  @media only screen and (width <= 600px) {
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-size: 1.75rem;
  }

  &__data {
    padding: 0 35px;
    @media only screen and (width <= 600px) {
      padding: 0px;
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
}
</style>
