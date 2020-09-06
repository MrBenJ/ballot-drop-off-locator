import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { HiGlobeAlt } from 'react-icons/hi';
import Text from '../Text';

import './Header.scss';

const Header = props => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <header className={cn('Header', className)}>
      <Text className="title" variant="h1">
        {t('title')}
      </Text>
      <div className="globe">
        <HiGlobeAlt />
      </div>
    </header>
  );
};

export default Header;
