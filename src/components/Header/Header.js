import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { ReactComponent as GlobeSVG } from './globe.svg';
import { ReactComponent as MenuSVG } from './menu.svg';

import './Header.scss';

const Header = props => {
  const { className } = props;
  const { t } = useTranslation();

  // TODO: Add language picker

  return (
    <header className={cn('Header', className)}>
      <div className="globe" onClick={() => {}}>
        <GlobeSVG />
      </div>
      <div className="logo-wrapper">
        <img
          className="logo-img"
          alt={t('Header.altLogo')}
          src="logo.png"
          srcSet="logo.png 1x, logo@2x.png 2x, logo@3x.png, 3x"
        />
      </div>
      <div className="menu">
        <MenuSVG />
      </div>
    </header>
  );
};

export default Header;
