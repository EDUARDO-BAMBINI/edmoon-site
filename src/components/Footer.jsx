import React from 'react';
import { useTranslation } from 'react-i18next';
import useVisitorCount from '../hooks/useVisitorCount';

const Footer = () => {
  const { t } = useTranslation();
  const visitorCount = useVisitorCount();

  return (
    <footer className="p-4 text-gray-300 text-xs md:text-sm text-left">
      <div className="mb-1">
        <span>{t('visitors', 'Visitors')}: </span>
        {visitorCount !== null ? (
          <span className="font-semibold">{visitorCount.toLocaleString('en-US')}</span>
        ) : (
          <span className="font-semibold animate-pulse">Loading...</span>
        )}
      </div>
      <div>{t('created_by', 'Created by ED')}</div>
    </footer>
  );
};

export default Footer;