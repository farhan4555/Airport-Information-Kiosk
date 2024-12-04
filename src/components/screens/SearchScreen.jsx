import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LogoButton from '../common/LogoButton';
import BackButton from '../common/BackButton';
import SelectorButton from '../common/SelectorButton';
import { useTranslation } from 'react-i18next'; // Import the translation hook



function ScreenScreen() {
  const { t } = useTranslation(); // Use the translation hook

  return (
    <Container className="page d-flex flex-column align-items-center">
      <div className='d-flex w-100 justify-content-left'>
        <BackButton />
      </div>

      <div className="p-3 flex-grow-0">
        <Row className="mb-3">
          <div className='genericTitle searchScreenTitle'>
            {t('searchTitle')}{}
          </div>
        </Row>
      </div>

      <div className="w-100 px-3 d-flex flex-column align-items-center">
        <Row className="mb-3 w-100 justify-content-center">
          <SelectorButton text={t('terminals')} />
          <SelectorButton text={t('baggageClaim')} />
        </Row>
        <Row className="mb-3 w-100 justify-content-center">
          <SelectorButton text= {t('washrooms')} />
          <SelectorButton text= {t('connections')} />
        </Row>
        <Row className="mb-3 w-100 justify-content-center">
          <SelectorButton text={t('parking')} />
          <SelectorButton text={t('hotels')} />
        </Row>
        <Row className="mb-3 w-100 justify-content-center">
          <SelectorButton text={t('shops')} />
          <SelectorButton text={t('busStops')} />
        </Row>
        <Row className="mb-3 w-100 justify-content-center">
          <SelectorButton text={t('restaurant')} />
          <SelectorButton text={t('helpDesk')} />
        </Row>
        <Row className="mb-3">
          <LogoButton text={t('airportMap')} imgPath="" link="map" />
        </Row>
      </div>
    </Container>

  );
}
export default ScreenScreen