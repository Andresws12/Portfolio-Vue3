<template>
  <div class="contact-buttons">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/Andresws12"
    >
      <img
        src="@/assets/img/github.svg"
        :alt="$t('common.images.dataGithubImage')"
        :title="$t('common.images.dataGithubImage')"
        class="contact-buttons__icon"
        width="29"
        height="29"
      />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/andreshernandez1995/"
    >
      <img
        class="contact-buttons__icon"
        src="@/assets/img/linkedin.svg"
        :alt="$t('common.images.dataLinkedinImage')"
        :title="$t('common.images.dataLinkedinImage')"
        width="29"
        height="29"
      />
    </a>
  </div>
</template>
<script lang="ts" setup>
// Code
</script>
<style lang="scss" scoped>
.contact-buttons {
  &__icon {
    margin-right: 10px;
    transition: all 0.3s;
    filter: $main-filter-color;

    &:hover {
      filter: $main-filter-color-medium-light;
    }
  }
}
</style>
