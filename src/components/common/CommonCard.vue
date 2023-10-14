<template>
  <article class="common-card" :class="{ 'is-active': isActive }">
    <div class="common-card__image-container">
      <img
        :src="imageSource"
        :alt="props.imageData"
        :title="props.imageData"
        width="250"
        :height="imageHeight"
        loading="lazy"
      />
    </div>
    <div class="common-card__text-container">
      <h3 class="common-card__title">{{ textTitle }}</h3>
      <h4 class="common-card__subtitle">{{ textSubtitle }}</h4>
      <p class="common-card__description">{{ textDescription }}</p>
    </div>
    <div class="common-card__button-container">
      <button class="button is-extended is-secondary" @click="emit('click')">
        Ver mas
      </button>
    </div>
  </article>
</template>

<script lang="ts" setup>
const props = defineProps<{
  imageSource: string;
  imageData: string;
  imageHeight: string;
  textTitle: string;
  textDescription: string;
  textSubtitle: string;
  isActive?: boolean;
}>();

type EmitsType = {
  (e: 'click'): void;
};

const emit = defineEmits<EmitsType>();
</script>

<style lang="scss" scoped>
// styles
.common-card {
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 350px;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 $main-color;
  background-color: $main-color;
  transition: 0.3s;

  color: $main-color-dark;

  &:hover {
    box-shadow: 0 8px 16px 0 $main-color;
  }

  &.is-active {
    box-shadow: 0 4px 8px 0 $main-color-medium-light;
    &:hover {
      box-shadow: 0 8px 16px 0 $main-color-medium-light;
    }
  }

  &__image-container {
    height: 180px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px 15px 0px 0px;
    margin-bottom: 15px;
  }

  &__button-container {
    padding: 0px 15px 15px 15px;
  }

  &__text-container {
    padding: 0px 15px;
  }

  &__title {
    font-size: 1.75rem;
    margin-bottom: 0px;
  }

  &__subtitle {
    margin-top: 10px;
    margin-bottom: 0px;
  }
  &__description {
    font-size: 0.85rem;
  }
}
</style>
