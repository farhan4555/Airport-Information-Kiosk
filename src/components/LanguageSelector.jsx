import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LanguageButton from './common/LanguageButton';

function LanguageSelector() {
  return (
    <div className='languageSelector'>
      <LanguageButton language="English" />
      <LanguageButton language="Mexican" />
      <LanguageButton language="Hindu" />
      <LanguageButton language="Italian" />
      <LanguageButton language="English" />
    </div>
  );
}

export default LanguageSelector