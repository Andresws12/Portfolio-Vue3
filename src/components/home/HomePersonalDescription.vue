<template>
  <section data-cy="home-section" class="home-personal-description">
    <article class="home-personal-description__content">
      <div>
        <h2>{{ $t('views.home.homeDescriptionPersonal.descriptionWho') }}</h2>
        <p>
          {{ $t('views.home.homeDescriptionPersonal.descriptions.paragraph1') }}
        </p>
        <p>
          {{ $t('views.home.homeDescriptionPersonal.descriptions.paragraph2') }}
        </p>
      </div>
      <img
        class="home-description__image"
        src="@/assets/img/animals.webp"
        :alt="$t('common.images.dataAnimalsImage')"
        :title="$t('common.images.dataAnimalsImage')"
        width="375"
        height="359"
        lazy="loading"
      />
    </article>
  </section>
</template>

<script lang="ts" setup>
// Code
</script>

<style lang="scss" scoped>
//Styles
.home-personal-description {
  background-color: $main-color;
  color: $main-color-dark;
  position: relative;
  padding: 25px 200px;

  @include tablet {
    padding: 25px;
  }

  &__content {
    display: flex;

    @include mobile {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
