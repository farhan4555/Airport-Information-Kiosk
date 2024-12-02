import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LanguageButton from './common/LanguageButton';

function LanguageSelector() {
  return (
    <div className='languageSelector'>
      <LanguageButton language="English" />
      <LanguageButton language="Spanish" />
      <LanguageButton language="Hindu" />
      <LanguageButton language="Italian" />
      </div>
  );
}

export default LanguageSelector