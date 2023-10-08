<template>
  <section data-cy="home-section" class="home-personal-description">
    <article>
      <h2>{{ $t('views.home.homeDescriptionPersonal.descriptionWho') }}</h2>
      <p>
        {{ $t('views.home.homeDescriptionPersonal.descriptions.paragraph1') }}
      </p>
      <p>
        {{ $t('views.home.homeDescriptionPersonal.descriptions.paragraph2') }}
      </p>
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
  padding: 25px;
}
</style>
