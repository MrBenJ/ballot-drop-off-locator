import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { ReactComponent as BlueBackArrowSVG } from './leftArrow-blue.svg';

import Text from '../Text';
import './SubBanner.scss';

const SubBanner = props => {
  const { className, children, backlink } = props;

  return (
    <div className={cn('SubBanner', className)}>
      {backlink && (
        <div className="back-arrow">
          <Link to={backlink}>
            <BlueBackArrowSVG />
          </Link>
        </div>
      )}
      <Text className="bold center">{children}</Text>
    </div>
  );
};

export default SubBanner;
