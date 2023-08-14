import { Locales } from '@/localization/locales/locales';

import es from '@/localization/locales/es/main';
import en from '@/localization/locales/en/main';

export const messages = {
  [Locales.ES]: es,
  [Locales.EN]: en,
};

export type MessageSchema = typeof es;
