import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { ReactComponent as DropIconSVG } from './dropIcon.svg';
import Button from '../../components/Button';
import Text from '../../components/Text';

import dropBoxHero2x from './dropBoxHero@2x.jpg';
import dropBoxHero3x from './dropBoxHero@3x.jpg';

import './IndexPage.scss';

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="IndexPage">
        <div className="top-flex">
          <div className="top-flex-first">
            <img
              src={dropBoxHero2x}
              className="main-image top-flex-first"
              alt={t('IndexPage.imgAlt')}
              srcSet={`${dropBoxHero2x} 2x, ${dropBoxHero3x} 3x`}
            />
          </div>
          <div className="top-flex-second">
            <Text className="dropbox-bolded bold center">
              {t('IndexPage.findBoxBold')}
            </Text>
            <Text className="dropbox-copy center">
              {t('IndexPage.absenteeText')}
            </Text>
            <Link to="/select-state">
              <Button className="button-cta">{t('IndexPage.buttonCTA')}</Button>
            </Link>
            <Text className="dropbox-copy center">
              {t('IndexPage.aboutMyBallotDrop')}
            </Text>
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
          </div>
        </div>
        <div className="content">
          <Text className="ensure-text-teal center bold">
            {t('IndexPage.tealBolded')}
            <br />
            {t('IndexPage.tealBolded2')}
          </Text>
          <div className="locate-svg">
            <Link to="/select-state">
              <DropIconSVG />
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
    </div>
  );
};

export default IndexPage;
