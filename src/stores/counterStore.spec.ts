// stores/counter.spec.ts
import { setActivePinia, createPinia } from 'pinia';
import { useTestCounterStore } from './testCounter';

describe('Test counter store', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  it('increments', () => {
    const counterStore = useTestCounterStore();
    expect(counterStore.counter).toBe(0);
    counterStore.increment();
    expect(counterStore.counter).toBe(1);
  });

  it('increments by amount', () => {
    const counterStore = useTestCounterStore();
    counterStore.increment(10);
    expect(counterStore.counter).toBe(10);
  });
});
