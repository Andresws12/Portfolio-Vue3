import { i18nGlobal } from './i18n';
import { Locales } from './locales/locales';
import { messages } from './locales/messages';
import { changeLanguage } from '@/utils/functionUtils/localizationFunctions';

const i18n = i18nGlobal;

describe('Basic translations test', () => {
  it('Default ES locale is working', () => {
    expect(i18n.locale).toBe(Locales.ES);
    expect(i18n.t('common.title.home')).toBe(messages.es.common.title.home);
  });

  it('Basic change of language is working', () => {
    expect(i18n.locale).toBe(Locales.ES);
    expect(i18n.t('common.languages.spanish')).toBe(
      messages.es.common.languages.spanish
    );
    expect(i18n.t('common.languages.english')).toBe(
      messages.es.common.languages.english
    );
    changeLanguage();
    expect(i18n.locale).toBe(Locales.EN);
    expect(i18n.t('common.languages.spanish')).toBe(
      messages.en.common.languages.spanish
    );
    expect(i18n.t('common.languages.english')).toBe(
      messages.en.common.languages.english
    );
  });
});
