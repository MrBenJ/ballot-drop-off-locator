import React from 'react';
import { useTranslation } from 'react-i18next';

import Text from '../../components/Text';

import './ContactPage.scss';
const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="ContactPage">
      <Text className="headline center bold">{t('ContactPage.headline')}</Text>
      <Text className="para">{t('ContactPage.para1')}</Text>
      <div className="emails">
        <Text className="email-copy">{t('ContactPage.email1')}</Text>
        <Text className="email-anchor">
          <a
            href="mailto:Data@MyBallotDrop.com"
            target="_blank"
            rel="noopener noreferrer">
            Data@MyBallotDrop.com
          </a>
        </Text>
        <Text className="email-copy">{t('ContactPage.email2')}</Text>
        <Text className="email-anchor">
          <a
            href="mailto:Webmaster@MyBallotDrop.com"
            target="_blank"
            rel="noopener noreferrer">
            Webmaster@MyBallotDrop.com
          </a>
        </Text>
        <Text className="email-copy">{t('ContactPage.email3')}</Text>
        <Text className="email-anchor">
          <a
            href="mailto:Partners@MyBallotDrop.com"
            target="_blank"
            rel="noopener noreferrer">
            Partners@MyBallotDrop.com
          </a>
        </Text>
        <Text className="email-copy">{t('ContactPage.email4')}</Text>
        <Text className="email-anchor">
          <a
            href="mailto:Info@MyBallotDrop.com"
            target="_blank"
            rel="noopener noreferrer">
            Info@MyBallotDrop.com
          </a>
        </Text>
      </div>
    </div>
  );
};

export default ContactPage;
