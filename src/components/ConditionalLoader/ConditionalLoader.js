import React from 'react';

import './ConditionalLoader.scss';

const Loader = props => {
  return <div className="Loader">Loading...</div>;
};

const ConditionalLoader = props => {
  const { condition, children, loader = <Loader /> } = props;

  return condition ? children : loader;
};

export default ConditionalLoader;
