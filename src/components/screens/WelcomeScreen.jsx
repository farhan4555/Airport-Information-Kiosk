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
      <div className="p-5 flex-grow-0 titleScreenText">
        <Row className="mb-1">
          <div className='welcomeScreenYYCText'>
            YYC
          </div>
        </Row>
        <Row className="mb-1">
          <div className='welcomeScreenWelcomeToText'>
            Welcome 
          </div>
        </Row>
        <Row className="mb-3">
          <div className='welcomeScreenCalgaryText'>
          {t('toCalgary')} {/* Dynamic translation */}
          </div>
        </Row>
      </div>

      {/* Adjust the positioning of the buttons */}
      <div className="w-100 px-3 d-flex flex-column align-items-center welcomeButtons">
        <Row className="mb-3">
          <Col md={6} className="d-flex justify-content-center">
            <LogoButton text="Airport Map" imgPath="" link="map"/>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <LogoButton text="Search Airport" imgPath="" link="search" />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6} className="d-flex justify-content-center">
            <LogoButton text="Transportation" imgPath="" link="transportation" />
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={6} className="d-flex justify-content-center">
                <LogoButton text="Flights" imgPath="" link="flights" />
              </Col>
              <Col xs={6} className="d-flex justify-content-center">
                <LogoButton text="Wifi" imgPath="" link="wifi" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb-3">
          <LogoButton text="Wifi" imgPath="./src/components/images/wifi.JPG" link="wifi" />
        </Row>
      </div>
    </Container>
  );
}

export default WelcomeScreen;
