import React from 'react';
// import { useTranslation } from 'react-i18next';
import { useParams, useHistory } from 'react-router-dom';

import Text from '../../components/Text';
import { STATES_MAP } from '../../constants';

const SelectCountyPage = () => {
  // const { t } = useTranslation();
  const { state } = useParams();
  const history = useHistory();
  const fullStateName = STATES_MAP[state.toUpperCase()];

  if (!fullStateName) {
    history.replace('/select-state');
  }

  return (
    <div className="SelectCountyPage">
      <Text>Select county for state: {fullStateName}</Text>
    </div>
  );
};

export default SelectCountyPage;
