import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { ReactComponent as FacebookSVG } from './fb.svg';
import { ReactComponent as TwitterSVG } from './twitter.svg';
import { ReactComponent as InstaSVG } from './insta.svg';
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
      <div className="social-icons">
        <div className="social-icons-item">
          <a
            href="https://www.facebook.com/myballotdrop/"
            target="_blank"
            rel="noopener noreferrer">
            <FacebookSVG className="svg svg-facebook" />
          </a>
        </div>
        <div className="social-icons-item">
          <a
            href="https://twitter.com/MyBallotDrop"
            target="_blank"
            rel="noopener noreferrer">
            <TwitterSVG className="svg svg-twitter" />
          </a>
        </div>
        <div className="social-icons-item">
          <a
            href="https://www.instagram.com/myballotdrop/"
            target="_blank"
            rel="noopener noreferrer">
            <InstaSVG className="svg svg-insta" />
          </a>
        </div>
      </div>
      <div className="footer-links-list">
        <Text variant="span">
          <Link to="/about">{t('Footer.linkAboutProject')}</Link>
          <Divider />
          <Link to="/data-integrity">{t('Footer.linkDataIntegrity')}</Link>
          <Divider />
          <Link to="/resources">{t('Footer.linkResources')}</Link>
          <Divider />
          <Link to="/contact">{t('Footer.linkContactUs')}</Link>
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
