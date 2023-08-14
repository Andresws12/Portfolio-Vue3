// Best practices:
// https://docs.cypress.io/guides/references/best-practices

export const cySelector = (selector: string): string =>
  `[data-cy="${selector}"]`;
