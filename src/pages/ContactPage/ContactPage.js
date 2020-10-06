import React from 'react';
import { useTranslation } from 'react-i18next';

import Text from '../../components/Text';
import CONTRIBUTORS from '../../CONTRIBUTORS';

import './ContactPage.scss';
const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="ContactPage">
      <Text className="headline center bold">{t('ContactPage.headline')}</Text>
      <Text className="para">{t('ContactPage.para1')}</Text>
      <Text className="para">{t('ContactPage.thanks')}</Text>
      <div className="list list-designdev">
        <Text className="list-title bold">{t('ContactPage.designDev')}</Text>
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
          {t('ContactPage.mediaRelations')}
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
        <Text className="list-title bold">{t('ContactPage.researchers')}</Text>
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

export default ContactPage;
