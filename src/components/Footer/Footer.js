import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

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
    <div className={cn('Footer', className)}>
      <Text className="footer-ballot-drop center">
        {t('Footer.MyBallotDrop')}
      </Text>
      <div className="social-icons">{/* ADD SOCIAL MEDIA ICONS HERE */}</div>
      <div className="footer-links-list">
        <Text variant="span">
          {t('Footer.linkAboutProject')}
          <Divider />
          {t('Footer.linkDataIntegrity')}
          <Divider />
          {t('Footer.linkContactUs')}
        </Text>
      </div>
      <Text className="voter-info-project center">
        {t('Footer.linkVoterInfo')}
      </Text>
    </div>
  );
};

export default Footer;
