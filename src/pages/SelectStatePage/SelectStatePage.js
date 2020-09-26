import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Text from '../../components/Text';
import StateBanner from '../../components/StateBanner';

import { STATES_MAP } from '../../constants';
import './SelectStatePage.scss';

const SelectStatePage = () => {
  const { t } = useTranslation();

  return (
    <div className="SelectStatePage">
      <StateBanner>
        {t('StatePage.locateText')}
        {t('StatePage.selectState')}
      </StateBanner>
      <div className="item-container">
        {Object.entries(STATES_MAP).map(([abbrev, state]) => {
          return (
            <Text className="link" key={abbrev}>
              <Link className="link-item" to={`/state/${abbrev}`}>
                {state}
              </Link>
            </Text>
          );
        })}
      </div>
    </div>
  );
};

export default SelectStatePage;
