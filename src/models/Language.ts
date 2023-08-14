export interface Language {
  code: string;
  name: string;
  culture: string;
}

export interface LanguageOption extends Language {
  disabled: boolean;
}
