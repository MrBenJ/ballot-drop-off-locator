import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Text from '../../components/Text';

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Text>Index Page</Text>
      <Link to="/">Home</Link>
      <br />
      <Link to="/select-state">Select State</Link>
    </div>
  );
};

export default IndexPage;
