import Container from 'react-bootstrap/Container';
import LogoButton from '../common/LogoButton';
import BackButton from '../common/BackButton';
import CancelButton from '../common/CancelButton';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { useTranslation } from 'react-i18next'; // Import translation hook



function AssistanceScreen({setVisibility}) {
    const {t } = useTranslation();
  return (
    <Container className="assistanceScreen">
    <div className="assistanceBox">
        <div className='genericTitle wifiInstructionText'>
        {t('helpTextPt1')}<br/>
        {t('helpTextPt2')}
        </div>
        <div>
            <img src = "/assistance.png" />
        </div>
    </div>
    
    <div className = "assistanceText1">
        {t('helpTextPt3')}
    </div>
    <div className = "assistanceText2">
        {t('helpTextPt4')}
    </div>
        <CancelButton text={t('cancel')} setVisibility={setVisibility} />
    </Container>

  );
}
export default AssistanceScreen