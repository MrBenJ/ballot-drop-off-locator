import React, { useReducer, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useHistory, Link } from 'react-router-dom';

import Text from '../../components/Text';
import { STATES_MAP } from '../../constants';

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
        const resp = await fetch(`/data/${state}/index.json`);
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
      <Text>
        {t('CountyPage.selectCounty')} {fullStateName}
      </Text>
      {pageState.error && <Text>{pageState.error}</Text>}
      {pageState.data.map(item => {
        console.log('loop');
        return (
          <Link
            key={item.shortname}
            to={`/state/${state.toUpperCase()}/${item.shortname}`}
            className="state state-link">
            {item.adminarea}
          </Link>
        );
      })}
    </div>
  );
};

export default SelectCountyPage;
