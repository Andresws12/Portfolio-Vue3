import { ColorPalette } from './colorPalette';

export const optionsParticles = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 75,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: ColorPalette.MAIN_COLOR_MEDIUM_LIGHT,
    },
    links: {
      color: ColorPalette.MAIN_COLOR_MEDIUM_LIGHT,
      distance: 150,
      enable: true,
      opacity: 0.1,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: undefined,
      enable: true,
      random: true,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 0.5, max: 3 },
    },
  },
  detectRetina: true,
};
