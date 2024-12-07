import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LogoButton from '../common/LogoButton';
import BackButton from '../common/BackButton';
import SelectorButton from '../common/SelectorButton';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import HomeButton from '../common/HomeButton';


function ScreenScreen() {
  const { t } = useTranslation(); // Use the translation hook

  return (
    <Container className="page d-flex flex-column align-items-center">
      <Row className="w-100 d-flex justify-content-between px-3 mb-1"> 
      <BackButton />
      <HomeButton />
    </Row>

      <div className="p-3 flex-grow-0">
        <Row className="">
          <div className='genericTitle searchScreenTitle'>
            {t('searchTitle')}{}
          </div>
        </Row>
      </div>

      <div className="w-100 px-3 d-flex flex-column align-items-center">
        <Row className="mb-3 w-100 justify-content-center">
          <SelectorButton text={t('terminals')} link="search/washrooms" />
          <SelectorButton text={t('baggageClaim')} link="search/washrooms" />
        </Row>
        <Row className="mb-3 w-100 justify-content-center">
          <SelectorButton text= {t('washrooms')} link="search/washrooms" />
          <SelectorButton text= {t('connections')} link="search/washrooms" />
        </Row>
        <Row className="mb-3 w-100 justify-content-center">
          <SelectorButton text={t('parking')} link="search/washrooms"/>
          <SelectorButton text={t('hotels')} link="search/washrooms"/>
        </Row>
        <Row className="mb-3 w-100 justify-content-center">
          <SelectorButton text={t('shops')} link="search/washrooms"/>
          <SelectorButton text={t('busStops')} link="search/washrooms" />
        </Row>
        <Row className="mb-3 w-100 justify-content-center">
          <SelectorButton text={t('restaurant')} link="search/washrooms" />
          <SelectorButton text={t('helpDesk')} link="search/washrooms" />
        </Row>
        <Row className="mb-3">
          <LogoButton text={t('airportMap')} imgPath="" link="map" />
        </Row>
      </div>
    </Container>

  );
}
export default ScreenScreen