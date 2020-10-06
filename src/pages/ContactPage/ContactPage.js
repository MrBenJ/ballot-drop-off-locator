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
            href="mailto:MyBallotDrop+Data@gmail.com"
            target="_blank"
            rel="noopener noreferrer">
            MyBallotDrop+Data@gmail.com
          </a>
        </Text>
        <Text className="email-copy">{t('ContactPage.email2')}</Text>
        <Text className="email-anchor">
          <a
            href="mailto:MyBallotDrop+Webmaster@gmail.com"
            target="_blank"
            rel="noopener noreferrer">
            MyBallotDrop+Webmaster@gmail.com
          </a>
        </Text>
        <Text className="email-copy">{t('ContactPage.email3')}</Text>
        <Text className="email-anchor">
          <a
            href="mailto:MyBallotDrop+Partners@gmail.com"
            target="_blank"
            rel="noopener noreferrer">
            MyBallotDrop+Partners@gmail.com
          </a>
        </Text>
        <Text className="email-copy">{t('ContactPage.email4')}</Text>
        <Text className="email-anchor">
          <a
            href="mailto:MyBallotDrop+Info@gmail.com"
            target="_blank"
            rel="noopener noreferrer">
            MyBallotDrop+Info@gmail.com
          </a>
        </Text>
      </div>
    </div>
  );
};

export default ContactPage;
