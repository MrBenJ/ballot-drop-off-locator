import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import Text from '../Text';
import { ReactComponent as BackArrowSVG } from './leftArrow.svg';
import './Banner.scss';

const StateBanner = props => {
  const { className, children, backlink, bold = false } = props;

  return (
    <div className={cn('Banner', className)}>
      {backlink && (
        <div className="back-arrow">
          <Link to={backlink}>
            <BackArrowSVG />
          </Link>
        </div>
      )}
      <Text className={cn('StateBanner-top center', { bold })}>
        {children[0]}
      </Text>
      <Text className="StateBanner-bottom center bold">{children[1]}</Text>
    </div>
  );
};

export default StateBanner;
