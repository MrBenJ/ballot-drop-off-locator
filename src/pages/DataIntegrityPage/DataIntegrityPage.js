import React from 'react';
import { useTranslation } from 'react-i18next';

import Text from '../../components/Text';
import './DataIntegrityPage.scss';
const DataIntegrityPage = () => {
  const { t } = useTranslation();

  return (
    <div className="DataIntegrityPage">
      <Text className="headline center bold">
        {t('DataIntegrityPage.headline')}
      </Text>
      <Text className="para">{t('DataIntegrityPage.para1')}</Text>
      <Text className="para">{t('DataIntegrityPage.para2')}</Text>
      <Text className="para">{t('DataIntegrityPage.para3')}</Text>
      <Text className="para">{t('DataIntegrityPage.para4')}</Text>
      <Text className="para">{t('DataIntegrityPage.para5')}</Text>
    </div>
  );
};

export default DataIntegrityPage;
