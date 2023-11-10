import './HeaderComponent.scss';
import { useTranslation } from 'react-i18next';

const languages = {
  en: { nativeName: 'English' },
  ja: { nativeName: 'Japanese' },
  ko: { nativeName: 'Korean' },
};

function HeaderComponent() {
  const { t, i18n } = useTranslation();

  return (
    <div className="HeaderComponent">
      <div className="translateButton">
        {Object.keys(languages).map((lang) => (
          <button
            key={lang}
            type="submit"
            className={
              'button1 ' + (i18n.resolvedLanguage === lang ? 'selected' : '')
            }
            onClick={() => i18n.changeLanguage(lang)}
          >
            {languages[lang].nativeName}
          </button>
        ))}
      </div>
      <h3 className="title">{t('common.title')}</h3>
    </div>
  );
}

export default HeaderComponent;
