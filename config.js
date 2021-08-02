// `see date-fns/src/locale` for available locales
export const supportedLocales = ['en-US', 'de', 'pl', 'it']
const getLocale = (locale) => require(`date-fns/locale/${locale}/index.js`) // or require() if using CommonJS

const formatDate = (date, formatStyle, locale) => {
  return format(date, formatStyle, {
    locale: getLocale(locale),
  })
}