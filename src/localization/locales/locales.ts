export enum Locales {
  ES = 'es',
  EN = 'en',
}

export const LOCALES = [
  { value: Locales.ES, caenion: 'Español' },
  { value: Locales.EN, caenion: 'English' },
];

export type LocalesSchema = Locales.ES | Locales.EN;
