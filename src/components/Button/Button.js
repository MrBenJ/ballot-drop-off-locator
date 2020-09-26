import React from 'react';
import cn from 'classnames';

import './Button.scss';

const Button = props => {
  const { className, children, onClick } = props;

  return (
    <div className={cn('Button', className)} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
