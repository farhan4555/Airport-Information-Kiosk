import Container from 'react-bootstrap/Container';
import LogoButton from '../common/LogoButton';
import BackButton from '../common/BackButton';
import SelectorButton from '../common/SelectorButton';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { useTranslation } from 'react-i18next'; // Import translation hook
import HomeButton from '../common/HomeButton';

function TransportationExample() {
  const { t } = useTranslation(); // useTranslation hook
  return (
    <Container className="page d-flex flex-column align-items-center">
      <Row className="w-100 d-flex justify-content-between px-3 mb-1"> 
      <BackButton />
      <HomeButton />
    </Row>
      
      <div className="p-3 flex-grow-0">

        <Row className="mb-3">
          <div className='genericTitle searchScreenTitle'>
            {t("dbusterminal")}
          </div>
        </Row>
      </div>

      <div className='d-flex flex-column align-items-center greyBackground'>
        <div className='genericTitle wifiInstructionText'>
        {t("terminal2")}
        </div>
        <div className='genericTitle unableToConnectText'>
        {t("direction4")}  <br />
        {t("direction5")}<br />
        {t("direction6")}<br />
        {t("direction7")}<br />
        {t("direction8")}
        </div>
      </div>
    </Container>

  );
}
export default TransportationExample