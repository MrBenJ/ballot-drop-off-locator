import React from 'react';
import cn from 'classnames';

import './Text.scss';

const Text = props => {
  const { className } = props;

  return <div className={cn('Text', className)}>Text</div>;
};

export default Text;
