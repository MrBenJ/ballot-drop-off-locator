import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ReactComponent as BackArrowSVG } from './leftArrow.svg';
import Text from '../Text';
import './CountyBanner.scss';

const CountyBanner = props => {
  const { className, backlink, children } = props;
  const { t } = useTranslation();

  return (
    <div className={cn('CountyBanner', className)}>
      <div className="container-top">
        {backlink && (
          <div className="back-arrow">
            <Link to={backlink}>
              <BackArrowSVG />
            </Link>
          </div>
        )}
        <Text className="CountyBanner-top bold center">{children[0]}</Text>
        <Text className="CountyBanner-bottom center bold">{children[1]}</Text>
      </div>
      <div className="container-bottom">
        <Text className="bold center">{`${t('CountyBanner.countiesIn')} ${
          children[0]
        }`}</Text>
      </div>
    </div>
  );
};

export default CountyBanner;
