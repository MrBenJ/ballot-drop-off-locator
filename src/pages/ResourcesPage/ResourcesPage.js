import React from 'react';
import { useTranslation } from 'react-i18next';

import Text from '../../components/Text';
import LINKS from './LINKS';
import './ResourcesPage.scss';

const ResourcesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="ResourcesPage">
      <Text className="headline center bold">
        {t('ResourcesPage.headline')}
      </Text>
      <Text className="para">{t('ResourcesPage.para1')}</Text>
      {LINKS.map(link => (
        <div key={link.text} className="para-link">
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.text}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ResourcesPage;
