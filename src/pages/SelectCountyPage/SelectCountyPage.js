import React, { useReducer, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useHistory, Link } from 'react-router-dom';

import Text from '../../components/Text';
import CountyBanner from '../../components/CountyBanner';
import { STATES_MAP } from '../../constants';
import '../SelectStatePage/SelectStatePage.scss';

const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ERROR': {
      return {
        ...state,
        error: action.value
      };
    }

    case 'RENDER_DATA': {
      return {
        ...state,
        data: [...action.data],
        didFetch: true
      };
    }

    default: {
      return state;
    }
  }
};

const initialState = {
  didFetch: false,
  data: [],
  error: ''
};

const SelectCountyPage = () => {
  const { t } = useTranslation();
  const { state } = useParams();
  const history = useHistory();
  const fullStateName = STATES_MAP[state.toUpperCase()];

  const [pageState, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    const fetchCountyInfo = async () => {
      try {
        const resp = await fetch(
          `${process.env.PUBLIC_URL}/data/${state.toLowerCase()}/index.json`
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
      fetchCountyInfo();
    }
  }, [state, t, pageState.didFetch]);

  if (!fullStateName) {
    history.replace('/select-state');
  }

  return (
    <div className="SelectCountyPage">
      <CountyBanner backlink="/select-state">
        {fullStateName}
        {t('CountyPage.selectCounty')}
      </CountyBanner>
      {pageState.error && <Text>{pageState.error}</Text>}
      <div className="item-container">
        {pageState.data.map(item => {
          return (
            <Link
              key={item.shortname}
              to={`/state/${state.toUpperCase()}/${item.shortname}`}
              className="link state-link">
              {item.adminarea}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SelectCountyPage;
