import React from 'react';
import cn from 'classnames';

import './Footer.scss';

const Footer = props => {
  const { className } = props;

  return <div className={cn('Footer', className)}>Footer</div>;
};

export default Footer;
