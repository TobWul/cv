export const supportedLanguages = [
  {id: 'no', title: 'Norwegian', isDefault: true},
  {id: 'en', title: 'English'},
]

export type LocaleStringType = {no: string; en: string}
export type CurrentLanguage = 'no' | 'en'

export const baseLanguage = supportedLanguages.find((l) => l.isDefault)
