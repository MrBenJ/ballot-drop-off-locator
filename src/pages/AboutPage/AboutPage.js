import React from 'react';
import { useTranslation } from 'react-i18next';
import Text from '../../components/Text';

import CONTRIBUTORS from '../../CONTRIBUTORS';
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
            className="bold link"
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
      <Text className="headline center bold">
        {t('ContributorsPage.headline')}
      </Text>
      <Text className="para">{t('ContributorsPage.para1')}</Text>

      <div className="list list-advisory">
        <Text className="list-title bold">
          {t('ContributorsPage.advisoryBoard')}
        </Text>
        <Text className="para">
          {t('ContributorsPage.advisoryParenthetical')}
        </Text>
        <ul className="list-names">
          {CONTRIBUTORS.advisory.map(name => (
            <li key={name} className="list-names-item">
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div className="list list-designdev">
        <Text className="list-title bold">
          {t('ContributorsPage.designDev')}
        </Text>
        <ul className="list-names">
          {CONTRIBUTORS.design_dev.map(name => (
            <li key={name} className="list-names-item">
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div className="list list-media">
        <Text className="list-title bold">
          {t('ContributorsPage.mediaRelations')}
        </Text>
        <ul className="list-names">
          {CONTRIBUTORS.media.map(name => (
            <li key={name} className="list-names-item">
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div className="list list-media">
        <Text className="list-title bold">
          {t('ContributorsPage.researchers')}
        </Text>
        <ul className="list-names">
          {CONTRIBUTORS.researchers.map(name => (
            <li key={name} className="list-names-item">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
