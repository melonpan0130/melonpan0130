import './HeaderComponent.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

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
            onClick={() => {
              i18n.changeLanguage(lang);
              document.documentElement.lang = lang;
            }}
          >
            {languages[lang].nativeName}
          </button>
        ))}
      </div>
      <Link to="/" className="title">
        {t('common.title')}
      </Link>
    </div>
  );
}

export default HeaderComponent;
