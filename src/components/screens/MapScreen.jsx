import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LogoButton from '../common/LogoButton';
import BackButton from '../common/BackButton';

function MapScreen() {
  return (
    <Container className="page d-flex flex-column align-items-center">
      <div className='d-flex w-100 justify-content-left'>
        <BackButton />
      </div>

      {/* Adjust the positioning of the welcome text */}
      <div className="p-3 flex-grow-0">

        <Row className="mb-3">
          <div className='genericTitle'>
            Airport Map
          </div>
        </Row>
      </div>

      {/* Adjust the positioning of the buttons */}
      <div className="w-100 px-3 d-flex flex-column align-items-center">
        <Row className="mb-3">
          <img src={'./src/components/images/airport_map.jpg'} alt="Logo" className="mapImg" />
        </Row>

        <Row className="mb-3 p-3">
          <LogoButton text="Search Airport" imgPath="" link="search" />
        </Row>
      </div>
    </Container>
  );
}
export default MapScreen