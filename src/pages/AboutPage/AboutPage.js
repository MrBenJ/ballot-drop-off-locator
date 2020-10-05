import React from 'react';
import { useTranslation } from 'react-i18next';
import Text from '../../components/Text';

import './AboutPage.scss';
const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="AboutPage">
      <Text className="headline center bold">{t('AboutPage.headline')}</Text>
      <Text className="para">
        <Text variant="span" className="bold">
          {t('appName')}
        </Text>{' '}
        <Text variant="span">{t('AboutPage.para1')}</Text>
      </Text>
      <Text className="para">
        <Text variant="span">
          {t('AboutPage.para2')}{' '}
          <a
            className="bold"
            href="https://apnews.com/32700a8b49ddf5f7594d2271eb033c2e"
            target="_blank"
            rel="noopener noreferrer">
            {t('AboutPage.para2-linked')}
          </a>
        </Text>
      </Text>
      <Text className="para">{t('AboutPage.para3')}</Text>
      <Text className="para">{t('AboutPage.para4')}</Text>
      <Text className="para">{t('AboutPage.para5')}</Text>
    </div>
  );
};

export default AboutPage;
