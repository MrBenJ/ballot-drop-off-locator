import React from 'react';
import cn from 'classnames';

import './Text.scss';

const Text = props => {
  const { className, children, variant = 'p' } = props;

  switch (variant) {
    case 'h1': {
      return <h1 className={cn('Text', className)}>{children}</h1>;
    }

    case 'h2': {
      return <h2 className={cn('Text', className)}>{children}</h2>;
    }

    default: {
      return <p className={cn('Text', className)}>{children}</p>;
    }
  }
};

export default Text;
