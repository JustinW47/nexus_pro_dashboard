import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const useTranslationWithStorage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguageAndStore = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };

  return { t, changeLanguageAndStore };
};

export default useTranslationWithStorage;
