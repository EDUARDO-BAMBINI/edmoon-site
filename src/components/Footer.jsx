import React from 'react';
import { useTranslation } from 'react-i18next'; // <-- ДОДАНО ІМПОРТ
import useVisitorCount from '../hooks/useVisitorCount';

const Footer = () => {
  const { t } = useTranslation(); // <-- ІНІЦІАЛІЗУЄМО ХУК
  const visitorCount = useVisitorCount();

  return (
    <footer className="w-full text-center p-4 text-gray-300 text-xs md:text-sm text-left">
      <div className="mb-1">
        {/* ЗАМІНЕНО СТАТИЧНИЙ ТЕКСТ НА КЛЮЧ ПЕРЕКЛАДУ */}
        <span>{t('visitors', 'Visitors')}: </span>
        {visitorCount !== null ? (
          <span className="font-semibold">{visitorCount.toLocaleString('en-US')}</span>
        ) : (
          <span>...</span>
        )}
      </div>
      {/* ЗАМІНЕНО СТАТИЧНИЙ ТЕКСТ НА КЛЮЧ ПЕРЕКЛАДУ */}
      <div>{t('footer_created_by', 'Created by ED')}</div>
    </footer>
  );
};

export default Footer;