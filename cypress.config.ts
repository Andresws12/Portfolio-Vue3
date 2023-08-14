import path from 'path';
import { defineConfig } from 'cypress';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

dotenv.config({
  path: path.join(process.cwd(), `.env.${process.env.NODE_ENV}`),
});

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    setupNodeEvents(on, config) {
      // Makes process.env visible on the Cypress.env context
      config.env = {
        ...process.env,
        ...config.env,
      };

      return config;
    },
  },
  env: {
    base_url: process.env.CYPRESS_BASE_URL,
    user_test_email: process.env.CYPRESS_USER_TEST_EMAIL,
    user_test_password: process.env.CYPRESS_USER_TEST_PASSWORD,
  },
});
