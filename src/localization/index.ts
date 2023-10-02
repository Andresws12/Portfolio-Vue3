import { createI18n } from 'vue-i18n';
import { Locales, LocalesSchema } from '@/localization/locales/locales';
import { messages, MessageSchema } from '@/localization/locales/messages';

const defaultLocale: LocalesSchema = Locales.EN;

const i18n = createI18n<[MessageSchema], LocalesSchema>({
  locale: defaultLocale,
  messages: messages,
  fallbackWarn: false,
});

export default i18n;
