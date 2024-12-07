import Container from 'react-bootstrap/Container';
import LogoButton from '../common/LogoButton';
import BackButton from '../common/BackButton';
import SelectorButton from '../common/SelectorButton';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { useTranslation } from 'react-i18next'; // Import translation hook
import HomeButton from '../common/HomeButton';

function AssistanceScreen() {
    const {t } = useTranslation();
  return (
    <Container className="assistanceScreen">
      <Row className="w-100 d-flex justify-content-between px-3 mb-1"> 
      <BackButton />
      <HomeButton />
    </Row>

    <div className="assistanceBox">
        <div className='genericTitle wifiInstructionText'>
          {t("hang")} <br />
          {t("help")}
        </div>
        <div>
            <img src = "./src/components/images/assistance.png" />
        </div>
    </div>
    
    <div className = "assistanceText1">
        {t("assistance")}
    </div>
    <div className = "assistanceText2">
        {t("mistake")}
    </div>
        <SelectorButton text={t('cancel')} link="" />
    </Container>

  );
}
export default AssistanceScreen