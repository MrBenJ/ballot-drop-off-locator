import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Text from '../Text';
import './Footer.scss';

// TODO: Add social media icons

const Divider = () => {
  return (
    <Text className="divider" variant="span">
      |
    </Text>
  );
};

const Footer = props => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <footer className={cn('Footer', className)}>
      <Text className="footer-ballot-drop center">
        {t('Footer.MyBallotDrop')}
      </Text>
      <div className="social-icons">{/* ADD SOCIAL MEDIA ICONS HERE */}</div>
      <div className="footer-links-list">
        <Text variant="span">
          <Link to="/about">{t('Footer.linkAboutProject')}</Link>
          <Divider />
          <Link to="/resources">{t('Footer.linkDataIntegrity')}</Link>
          <Divider />
          <Link to="/contributors">{t('Footer.linkContributors')}</Link>
          <Divider />
          <Link to="/contact">{t('Footer.linkContactUs')}</Link>
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
