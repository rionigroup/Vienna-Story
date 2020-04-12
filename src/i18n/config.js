import i18next from 'i18next';

i18next.init({
    fallbackLng: 'en-US',
    resources: {
        'zh-TW': {
            translations: require('../locales/tw/translations.json')
        },
        'en-US': {
            translations: require('../locales/en/translations.json')
        },
        jp: {
            translations: require('../locales/jp/translations.json')
        }
    },
    ns: ['translations'],
    defaultNS: 'translations',
    returnObjects: true,
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
        escapeValue: false, // not needed for react!!
    },
    react: {
        wait: true,
    },
});

i18next.languages = ['zh-TW', 'en-US', 'jp'];

export default i18next;