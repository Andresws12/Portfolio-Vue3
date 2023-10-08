<template>
  <vue-particles
    id="tsparticles"
    :particles-init="particlesInit"
    :options="optionsParticles"
  />
  <RouterView />
  <button-translation />
</template>
0
<script lang="ts" setup>
import ButtonTranslation from '@/components/common/ButtonTranslation.vue';

import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';
import { optionsParticles } from '@/utils/vueParticlesConfiguration';

const particlesInit = async (engine: Engine): Promise<void> => {
  await loadSlim(engine);
};
</script>

<style lang="scss" scoped>
// App styles
</style>
