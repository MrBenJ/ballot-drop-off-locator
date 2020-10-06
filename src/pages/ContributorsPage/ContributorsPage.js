import React from 'react';
import { useTranslation } from 'react-i18next';

import Text from '../../components/Text';
import CONTRIBUTORS from '../../CONTRIBUTORS';

import './ContributorsPage.scss';
const ContributorsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="ContributorsPage">
      <Text className="headline center bold">
        {t('ContributorsPage.headline')}
      </Text>
      <Text className="para">{t('ContributorsPage.para1')}</Text>
      <Text className="para">{t('ContributorsPage.thanks')}</Text>
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

export default ContributorsPage;
