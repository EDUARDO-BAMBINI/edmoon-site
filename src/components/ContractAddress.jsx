import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ContractAddress = () => {
  const { t, i18n } = useTranslation(); // Додаємо i18n для відстеження мови
  const contractAddress = "0x000000000000000000000000000000000000EDMN";
  
  // Тепер у стані ми зберігаємо "стан" кнопки, а не текст
  const [buttonState, setButtonState] = useState('default'); // 'default', 'copied', 'error'

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setButtonState('copied');
      setTimeout(() => {
        setButtonState('default');
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      setButtonState('error');
      setTimeout(() => {
        setButtonState('default');
      }, 2000);
    });
  };

  // Функція для отримання правильного тексту кнопки залежно від стану
  const getButtonText = () => {
    if (buttonState === 'copied') {
      return t('copy_button_success', 'Copied!');
    }
    if (buttonState === 'error') {
      return t('copy_button_error', 'Error');
    }
    return t('copy_button', 'Copy');
  };

  return (
    <div className="mt-8 flex items-center justify-center bg-black/30 backdrop-blur-sm p-2 rounded-lg max-w-sm w-full md:max-w-md">
      <p className="text-xs md:text-sm text-gray-300 truncate mr-3 flex-grow text-left pl-2">
        <span className="hidden sm:inline">{t('contract_address', 'Contract')}: </span>
        {contractAddress}
      </p>
      <button
        onClick={handleCopy}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md text-sm transition-colors whitespace-nowrap"
      >
        {getButtonText()} {/* Використовуємо функцію для отримання тексту */}
      </button>
    </div>
  );
};

export default ContractAddress;