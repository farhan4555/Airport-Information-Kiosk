import Container from 'react-bootstrap/Container';
import LogoButton from '../common/LogoButton';
import BackButton from '../common/BackButton';
import SelectorButton from '../common/SelectorButton';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { useTranslation } from 'react-i18next'; // Import translation hook


function AssistanceScreen() {
    const {t } = useTranslation();
  return (
    <Container className="assistanceScreen">
      <div className='d-flex w-100 justify-content-left'>
        <BackButton />
      </div>

    <div className="assistanceBox">
        <div className='genericTitle wifiInstructionText'>
          Hang tight! <br />
          Help is on the way!
        </div>
        <div>
            <img src = "./src/components/images/assistance.png" />
        </div>
    </div>
    
    <div className = "assistanceText1">
        This message is being displayed because you clicked on the 'Call for Assistance' button.
    </div>
    <div className = "assistanceText2">
        If this was a mistake please click the button below to cancel.
    </div>
        <SelectorButton text={t('cancel')} link="" />
    </Container>

  );
}
export default AssistanceScreen