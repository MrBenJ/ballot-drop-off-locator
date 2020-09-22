import React, { useReducer, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useHistory } from 'react-router-dom';

import ConditionalLoader from '../../components/ConditionalLoader';
import Text from '../../components/Text';

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
  // const history = useHistory();
  const [pageState, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    const fetchCountyDropboxes = async () => {
      try {
        const resp = await fetch(`/data/${state}/${county}.json`);
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

  return (
    <div className="CountyPage">
      <ConditionalLoader condition={pageState.didFetch}>
        <Text>{data.adminarea}</Text>
        <Text>
          There are {data.flagboxes} ballot dropboxes in {data.adminarea},{' '}
          {state}
        </Text>
        <Text>
          See information about early voting{' '}
          <a
            href={data.urlearlyvoting}
            target="_blank"
            rel="noopener noreferrer">
            here
          </a>
        </Text>
        <Text>
          See more information regarding drop boxes in {data.adminarea}{' '}
          <a
            href={data.urlvbmdropboxes}
            target="_blank"
            rel="noopener noreferrer">
            here
          </a>
        </Text>
      </ConditionalLoader>
    </div>
  );
};

export default CountyPage;
