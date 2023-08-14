<template>
  <section data-cy="home-section">
    <h1>{{ $t('views.home.localCounterTitle') }}</h1>
    <p>{{ $t('views.home.localCounterSubTitle') }} {{ counter }}</p>
    <button @click="sumCounter()">
      {{ $t('views.home.localCounterButton') }}
    </button>
    <h1>{{ $t('views.home.stateCounterTitle') }}</h1>
    <p>{{ $t('views.home.stateCounterSubTitle') }}{{ counterStore.counter }}</p>
    <button @click="counterStore.increment()">
      {{ $t('views.home.stateCounterButton') }}
    </button>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { Ref } from 'vue';

import { useTestCounterStore } from '@/stores/testCounter';
const counterStore = useTestCounterStore();

const counter: Ref<number> = ref(0);

const sumCounter = (): void => {
  counter.value++;
};
</script>

<style lang="scss" scoped>
//Styles
</style>
