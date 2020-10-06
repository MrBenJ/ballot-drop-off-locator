import React from 'react';
import { useTranslation } from 'react-i18next';

import Text from '../../components/Text';
import './ResourcesPage.scss';
const ResourcePage = () => {
  const { t } = useTranslation();

  return (
    <div className="ResourcesPage">
      <Text className="headline center bold">
        {t('ResourcesPage.headline')}
      </Text>
      <Text className="para">{t('ResourcesPage.para1')}</Text>
      <Text className="para">{t('ResourcesPage.para2')}</Text>
      <Text className="para">{t('ResourcesPage.para3')}</Text>
      <Text className="para">{t('ResourcesPage.para4')}</Text>
      <Text className="para">{t('ResourcesPage.para5')}</Text>
    </div>
  );
};

export default ResourcePage;
