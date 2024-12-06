import Container from 'react-bootstrap/Container';
import LogoButton from '../common/LogoButton';
import BackButton from '../common/BackButton';
import SelectorButton from '../common/SelectorButton';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { useTranslation } from 'react-i18next'; // Import translation hook


function SearchExample() {
  const { t} = useTranslation();
  return (
    <Container className="page d-flex flex-column align-items-center">
      <div className='d-flex w-100 justify-content-left'>
        <BackButton />
      </div><div className="p-3 flex-grow-0">

        <Row className="mb-3">
          <div className='genericTitle searchScreenTitle'>
            {t("dwashroom")}
          </div>
        </Row>
      </div>

      <div className='d-flex flex-column align-items-center greyBackground'>
        <div className='genericTitle wifiInstructionText'>
          {t("terminal")}
        </div>
        <div className='genericTitle unableToConnectText'>
          {t("direction1")}  <br />
          {t("direction2")}  <br />
          {t("direction3")}  <br />
        </div>
      </div>
    </Container>

  );
}
export default SearchExample