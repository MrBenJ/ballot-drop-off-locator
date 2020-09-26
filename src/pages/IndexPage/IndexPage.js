import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { ReactComponent as LocateSVG } from './locate.svg';
import Button from '../../components/Button';
import './IndexPage.scss';
import Text from '../../components/Text';

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="drop-img-bg"></div>
      <div className="IndexPage">
        <Text className="dropbox-bolded bold center">
          {t('IndexPage.findBoxBold')}
        </Text>
        <Text className="dropbox-copy center">
          {t('IndexPage.absenteeText')}
        </Text>
        <Text className="dropbox-copy center">
          {t('IndexPage.aboutMyBallotDrop')}
        </Text>
        <Link to="/select-state">
          <Button className="button-cta">{t('IndexPage.buttonCTA')}</Button>
        </Link>
        <Text className="locate-copy-wrapper center">
          <Text className="bold" variant="span">
            {t('IndexPage.boldLocate')}
          </Text>{' '}
          {t('IndexPage.whereAvailable')}{' '}
          <Text className="bold" variant="span">
            {t('IndexPage.boldDropDirectly')}
          </Text>{' '}
          {t('IndexPage.atJursidiction')}
        </Text>
        <Text className="ensure-text-teal center bold">
          {t('IndexPage.tealBolded')}
          <br />
          {t('IndexPage.tealBolded2')}
        </Text>
        <div className="locate-svg">
          <LocateSVG />
        </div>
        <Text className="county-gov-copy center">
          {t('IndexPage.siteProvides')}{' '}
          <Text className="bold" variant="span">
            {t('IndexPage.boldedCounty')}
          </Text>{' '}
          {t('IndexPage.or')}{' '}
          <Text className="bold" variant="span">
            {t('IndexPage.boldedStateGov')}
          </Text>{' '}
          {t('IndexPage.siteProvidesEnd')}
        </Text>
      </div>
    </div>
  );
};

export default IndexPage;
