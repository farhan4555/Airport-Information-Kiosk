import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LanguageButton from './common/LanguageButton';

function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="languageSelector">
      <LanguageButton 
        language="English" 
        isSelected={selectedLanguage === 'English'} 
        onClick={() => handleLanguageSelect('English')} 
      />
      <LanguageButton 
        language="Spanish" 
        isSelected={selectedLanguage === 'Spanish'} 
        onClick={() => handleLanguageSelect('Spanish')} 
      />
      <LanguageButton 
        language="Hindu" 
        isSelected={selectedLanguage === 'Hindu'} 
        onClick={() => handleLanguageSelect('Hindu')} 
      />
      <LanguageButton 
        language="Italian" 
        isSelected={selectedLanguage === 'Italian'} 
        onClick={() => handleLanguageSelect('Italian')} 
      />
    </div>
  );
}
export default LanguageSelector;