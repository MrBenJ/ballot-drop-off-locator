import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Text from '../../components/Text';

import { STATES_MAP } from '../../constants';
import './SelectStatePage.scss';

const SelectStatePage = () => {
  const { t } = useTranslation();

  return (
    <div className="SelectStatePage">
      <div className="instructions-container">
        <Text className="flavor">{t('StatePage.flavorText')}</Text>
        <Text className="instruction">{t('StatePage.selectState')}</Text>
      </div>
      <div className="item-container">
        {Object.entries(STATES_MAP).map(([abbrev, state]) => {
          return (
            <Link
              key={abbrev}
              to={`/state/${abbrev}`}
              className="link state-link">
              {state}
            </Link>
          );
        })}
      </div>
      <Text>Select State Page</Text>
      <Link to="/">Home</Link>
      <br />
      <Link to="/select-state">Select State</Link>
    </div>
  );
};

export default SelectStatePage;
