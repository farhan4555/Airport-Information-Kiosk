import React, { useState, useEffect } from 'react';
import i18n from 'i18next';
import LanguageButton from './common/LanguageButton';
import AssistanceButton from './common/AssistanceButton.jsx';

function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language); // Track the current language

  // Subscribe to language changes
  useEffect(() => {
    const handleLanguageChange = (lang) => setCurrentLanguage(lang);

    i18n.on('languageChanged', handleLanguageChange); // Listen for language changes

    return () => {
      i18n.off('languageChanged', handleLanguageChange); // Cleanup listener on unmount
    };
  }, []);

  const handleLanguageSelect = (languageCode) => {
    i18n.changeLanguage(languageCode); // Update global language
  };

  return (
    <div className="languageSelector">
      <LanguageButton
        language="English"
        isSelected={currentLanguage === 'en'} // Use currentLanguage state
        onClick={() => handleLanguageSelect('en')} // Change language to English
      />
      <LanguageButton
        language="French"
        isSelected={currentLanguage === 'fr'}
        onClick={() => handleLanguageSelect('fr')} // Change language to French
      />
      <LanguageButton
        language="Hindi"
        isSelected={currentLanguage === 'hi'}
        onClick={() => handleLanguageSelect('hi')} // Change language to Hindi
      />
      <LanguageButton
        language="Italian"
        isSelected={currentLanguage === 'it'}
        onClick={() => handleLanguageSelect('it')} // Change language to Italian
      />
    </div>
  );
}

export default LanguageSelector;