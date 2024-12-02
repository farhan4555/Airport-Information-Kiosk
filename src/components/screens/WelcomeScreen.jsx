import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import LogoButton from '../common/LogoButton'

function WelcomeScreen() {
  return (
    <Container className="page d-flex flex-column align-items-center">
      <div className="p-5">
        <Row>
          <div className='welcomeScreenYYCText'>
          YYC
            </div>
        </Row>
        <Row>
          <div className='welcomeScreenWelcomeToText'>
          Welcome To
          </div>
        </Row>
        <Row>
        <div className='welcomeScreenCalgaryText'>
          Calgary!
          </div>
        </Row>
      </div>

           <div className="w-100 px-3">
        <Row className="mb-3">
          <Col md={6} className="d-flex justify-content-center">
            <LogoButton text="Airport Map" imgPath="" link="map"/>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <LogoButton text="Search Airport" imgPath="" link="search" />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6} className="d-flex">
            <LogoButton text="Transportation" imgPath=""  link="transportation"  />
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={6} className="d-flex ">
                <LogoButton text="Flights" imgPath="" link="flights" />
              </Col>
              <Col xs={6} className="d-flex">
                <LogoButton text="Wifi" imgPath="" link="wifi" />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>

  );
}
export default WelcomeScreen