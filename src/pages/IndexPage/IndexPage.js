import React from 'react';
import { useTranslation } from 'react-i18next';

const IndexPage = () => {
  const { t } = useTranslation();

  return <div>{t('title')}</div>;
};

export default IndexPage;
