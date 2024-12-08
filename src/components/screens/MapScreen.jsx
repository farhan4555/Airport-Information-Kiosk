import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LogoButton from '../common/LogoButton';
import BackButton from '../common/BackButton';
import { useTranslation } from 'react-i18next'; // Import translation hook

import HomeButton from '../common/HomeButton';

function MapScreen() {
  const { t } = useTranslation(); // Use the translation function
  return (
    <Container className="page d-flex flex-column align-items-center">
    
    <Row className="w-100 d-flex justify-content-between px-3 mb-1"> 
      <BackButton />
      <HomeButton />
    </Row>

      {/* Adjust the positioning of the welcome text */}<div className="p-3 flex-grow-0">

        <Row className="mb-3">
          <div className='genericTitle'>
            {t("AirportMap")}
          </div>
        </Row>
      </div>

     
      <div className="w-100 px-3 d-flex flex-column align-items-center">
        <Row className="mb-3">
          <img src={'/airport_map.jpg'} alt="Logo" className="mapImg" />
        </Row>

        <Row className="mb-3 p-3">
          <LogoButton text={t("searchAirport")} imgPath="" link="search" />
        </Row>
      </div>
    </Container>
  );
}
export default MapScreen