<template>
  <section data-cy="home-section" class="home-content">
    <img
      class="home-content__image"
      src="@/assets/img/body.webp"
      :alt="$t('views.home.images.dataBodyImage')"
      :title="$t('views.home.images.dataBodyImage')"
      width="250"
      height="288"
    />
    <img
      class="home-content__image-blurred"
      src="@/assets/img/body.webp"
      :alt="$t('views.home.images.dataBodyImageBlurred')"
      :title="$t('views.home.images.dataBodyImageBlurred')"
      width="250"
      height="288"
    />
    <article class="home-content__data">
      <h1 class="home-content__title">{{ $t('views.home.title') }}</h1>
      <h2 class="home-content__subtitle">{{ $t('views.home.subtitle') }}</h2>
      <div class="home-content__description-section">
        <p>{{ $t('views.home.descriptionGreetings') }}</p>
        <p>
          {{ $t('views.home.descriptionWelcome') }}<br />{{
            $t('views.home.description')
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
.home-content {
  display: flex;
  padding: 25px;
  align-items: center;

  @media only screen and (width <= 600px) {
    flex-direction: column;
  }

  &__title {
    font-size: 1.75rem;
  }

  &__data {
    padding: 35px;
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
