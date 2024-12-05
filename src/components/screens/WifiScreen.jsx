import Container from 'react-bootstrap/Container';
import LogoButton from '../common/LogoButton';
import BackButton from '../common/BackButton';
import SelectorButton from '../common/SelectorButton';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { useTranslation } from 'react-i18next'; // Import translation hook

function WifiScreen() {
  const {t} = useTranslation();
  return (
    <Container className="page d-flex flex-column align-items-center">
      <div className='d-flex w-100 justify-content-left'>
        <BackButton />
      </div><div className="p-3 flex-grow-0">

        <Row className="mb-3">
          <div className='genericTitle searchScreenTitle'>
            {t("title")}
          </div>
        </Row>
      </div>

      <div className='d-flex flex-column align-items-center greyBackground'>
        <img src="./src/components/images/qr code.png" alt="weather" className='qrCodeImg'/>
        <div className='genericTitle wifiInstructionText'>
          {t("instruction")} <br />
        </div>
        <div className='genericTitle unableToConnectText'>
          {t("step1")} <br />
          {t("step2")} <br />
          {t("step3")} <br />
        </div>
      </div>
    </Container>

  );
}
export default WifiScreen