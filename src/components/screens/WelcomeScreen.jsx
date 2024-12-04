import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import LogoButton from '../common/LogoButton';
import { useTranslation } from 'react-i18next'; // Import translation hook

function WelcomeScreen() {
  const { t } = useTranslation(); // Use the translation function
  return (
    <Container className="page d-flex flex-column align-items-center">
      {/* Adjust the positioning of the welcome text */}
      <div className="p-5 flex-grow-0">
        <Row className="mb-1">
          <div className='welcomeScreenYYCText'>
            YYC
          </div>
        </Row>
        <Row className="mb-1">
          <div className='welcomeScreenWelcomeToText'>
          {t('welcome')} {/* Dynamic translation */}
          </div>
        </Row>
        <Row className="mb-3">
          <div className='welcomeScreenCalgaryText'>
          {t('toCalgary')} {/* Dynamic translation */}
          </div>
        </Row>
      </div>

      {/* Adjust the positioning of the buttons */}
      <div className="w-100 px-2 d-flex flex-column align-items-center">
        <Row className="mb-3 justify-content-center">
          <Col md={5} className="d-flex justify-content-center">
          <LogoButton text={t('AirportMap')} imgPath="" link="map" /> {/* Dynamic translation */}
          </Col>
          <Col md={7} className="d-flex justify-content-center">
            <LogoButton text={t("searchAirport")} imgPath="" link="search" />
          </Col>
        </Row>

        <Row className="mb-3 justify-content-center">
          <Col xs={4} className="d-flex justify-content-center">
            <LogoButton text={t("transportation")} imgPath="" link="transportation" />
          </Col>
          <Col md={7}>
            <Row>
              <Col xs={5} className="d-flex justify-content-center">
                <LogoButton text={t("flights")} imgPath="" link="flights" />
              </Col>
              <Col xs={7} className="d-flex justify-content-center">
                <LogoButton text={t("wifi")} imgPath="" link="wifi" />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default WelcomeScreen;
