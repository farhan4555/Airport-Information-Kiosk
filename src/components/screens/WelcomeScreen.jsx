import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import LogoButton from '../common/LogoButton'

function WelcomeScreen() {
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
            To Calgary!
          </div>
        </Row>
      </div>

      {/* Adjust the positioning of the buttons */}
      <div className="w-100 px-3 d-flex flex-column align-items-center welcomeButtons">
        <Row className="mb-3">
          <Col md={6} className="d-flex justify-content-center">
            <LogoButton text="Airport Map" imgPath="./src/components/images/flight.JPG" link="map" />
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <LogoButton text="Search Airport" imgPath="./src/components/images/search.JPG" link="search" />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <LogoButton text="Transportation" imgPath="./src/components/images/taxi.JPG" link="transportation" />
          </Col>
          <Col md={6}>
            <LogoButton text="Flights" imgPath="./src/components/images/flight.JPG" link="flights" />
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
