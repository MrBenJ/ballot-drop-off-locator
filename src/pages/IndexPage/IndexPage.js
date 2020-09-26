import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { ReactComponent as LocateSVG } from './locate.svg';
import Button from '../../components/Button';
import Text from '../../components/Text';

import MainImage from './mainImage.jpg';
import MainImage2x from './mainImage@2x.jpg';
import MainImage3x from './mainImage@3x.jpg';

import './IndexPage.scss';

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <img
        src={MainImage}
        className="main-image"
        alt={t('IndexPage.imgAlt')}
        srcSet={`${MainImage2x} 2x, ${MainImage3x} 3x`}
      />
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
          <Link to="/select-state">
            <LocateSVG />
          </Link>
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
