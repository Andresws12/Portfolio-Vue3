import { ref } from 'vue';
import { defineStore } from 'pinia';

/**
 * The code is defining a store called `useTestCounterStore` using the `defineStore` function provided
 * by the Pinia library. The store has a `counter` variable that is initialized with a value of 0 using
 * the `ref` function from the Vue library.
 */
export const useTestCounterStore = defineStore('testCounter', () => {
  const counter = ref<number>(0);

  /**
   * The function increments a counter value by either a specified increment or by 1 if no increment is
   * provided.
   * @param {number} [incrementer] - The `incrementer` parameter is an optional parameter of type
   * `number`. It is used to specify the value by which the `counter` should be incremented.
   * If no incrementer is provided, the counter will be incremented by 1
   */
  const increment = (incrementer?: number): void => {
    counter.value = incrementer ? incrementer : ++counter.value;
  };

  return {
    counter,
    increment,
  };
});
