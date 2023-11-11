import './NotFoundComponent.scss';
import { useTranslation } from 'react-i18next';

function NotFoundComponent() {
  const { t } = useTranslation();

  return <div className="NotFoundComponent">{t('notFound')}</div>;
}

export default NotFoundComponent;
