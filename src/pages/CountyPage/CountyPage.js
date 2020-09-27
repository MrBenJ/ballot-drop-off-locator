import React, { useReducer, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';

import Banner from '../../components/Banner';
import SubBanner from '../../components/SubBanner';
import ConditionalLoader from '../../components/ConditionalLoader';
import Text from '../../components/Text';
import Button from '../../components/Button';

import { STATES_MAP } from '../../constants';
import './CountyPage.scss';

const Reducer = (state, action) => {
  switch (action.type) {
    case 'RENDER_DATA': {
      return {
        ...state,
        didFetch: true,
        data: {
          ...action.data
        }
      };
    }

    default: {
      return state;
    }
  }
};

const initialState = {
  didFetch: false,
  data: {},
  error: ''
};

const CountyPage = () => {
  const { t } = useTranslation();
  const { state, county } = useParams();
  const [pageState, dispatch] = useReducer(Reducer, initialState);
  const fullStateName = STATES_MAP[state.toUpperCase()];

  useEffect(() => {
    const fetchCountyDropboxes = async () => {
      try {
        const resp = await fetch(
          `${process.env.PUBLIC_URL}/data/${state.toLowerCase()}/${county}.json`
        );
        const json = await resp.json();

        dispatch({ type: 'RENDER_DATA', data: json });
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          /* eslint-disable-next-line */
          console.error(error);
          dispatch({ type: 'SET_ERROR', value: error.message });
        } else {
          dispatch({
            type: 'SET_ERROR',
            value: t('CountyPage.countyErrorGeneric')
          });
        }
      }
    };

    if (!pageState.didFetch) {
      fetchCountyDropboxes();
    }
  }, [pageState.didFetch, county, state, t]);
  const { data } = pageState;

  const hasDropboxes = data.flagboxes || false;

  return (
    <div className="CountyPage">
      <ConditionalLoader condition={pageState.didFetch}>
        <Banner backlink="/select-state" bold>
          {[fullStateName]}
        </Banner>
        <SubBanner backlink={`/state/${state.toUpperCase()}/${data.shortname}`}>
          {`${data.adminarea} ${t('CountyPage.county')}`}
        </SubBanner>
        <div className="container">
          <Text className="jurisdiction-copy center">
            {t('CountyPage.yourJurisdiction')}{' '}
            <Text variant="span" className="bold">
              {t(hasDropboxes ? 'CountyPage.does' : 'CountyPage.doesnot')}
            </Text>{' '}
            {t('CountyPage.haveBallotDrops')} {t('CountyPage.the')}{' '}
            <a
              className="link"
              href={data.urlvbmdropboxes}
              target="_blank"
              rel="noopener noreferrer">
              {t('CountyPage.dropOffLinkText')}
            </a>{' '}
            {t('CountyPage.button')} {t('CountyPage.jurisdictionCopyEnd')}
          </Text>
          <Button>{t('CountyPage.dropOffLinkText').toUpperCase()}</Button>
          <Text className="button-flavor-copy center">
            {t('CountyPage.findMore')}
          </Text>
          <Button>{t('CountyPage.stateBallotButtonText').toUpperCase()}</Button>
          <Text className="button-flavor-copy center">
            {t('CountyPage.seeMoreMapCopy')}{' '}
            <Text variant="span" className="link">
              {t('CountyPage.onAMap')}
            </Text>
          </Text>
          <Button className="less-margin">
            {t('CountyPage.viewMapButtonText').toUpperCase()}
          </Button>
          <Text className="button-flavor-copy center">
            {t('CountyPage.mapProvidedBy')}{' '}
            <Text className="link link-orange" variant="span">
              {t('CountyPage.BallotNav')}
            </Text>
          </Text>
        </div>
      </ConditionalLoader>
    </div>
  );
};

export default CountyPage;
