import React from 'react';
import cn from 'classnames';

import Text from '../Text';

import './StateBanner.scss';

const StateBanner = props => {
  const { className, children } = props;

  return (
    <div className={cn('StateBanner', className)}>
      <Text className="StateBanner-top center">{children[0]}</Text>
      <Text className="StateBanner-bottom center bold">{children[1]}</Text>
    </div>
  );
};

export default StateBanner;
