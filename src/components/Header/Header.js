import React from 'react';
import cn from 'classnames';

import './Header.scss';

const Header = props => {
  const { className } = props;

  return <div className={cn('Header', className)}>Header</div>;
};

export default Header;
