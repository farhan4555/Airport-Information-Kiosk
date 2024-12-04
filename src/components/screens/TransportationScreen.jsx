import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LogoButton from '../common/LogoButton';
import BackButton from '../common/BackButton';
import SelectorButton from '../common/SelectorButton';


function TransportationScreen() {
  return (
    <Container className="page d-flex flex-column align-items-center">
      <div className='d-flex w-100 justify-content-left'>
        <BackButton />
      </div>

      {/* Adjust the positioning of the welcome text */}
      <div className="p-3 flex-grow-0">

        <Row className="mb-3">
          <div className='genericTitle'>
            Transportation
          </div>
        </Row>
      </div>

      {/* Adjust the positioning of the buttons */}
      <div className="w-100 px-3 d-flex flex-column align-items-center">
        <Row className="mb-4 w-100 justify-content-center">
          <SelectorButton text="Taxi" link="transportation/calgaryTransit" />
        </Row>
        <Row className="mb-4 w-100 justify-content-center">
          <SelectorButton text="Calgary Transit" link="transportation/calgaryTransit" />
        </Row>
        <Row className="mb-4 w-100 justify-content-center">
          <SelectorButton text="Uber" link="transportation/calgaryTransit" />
        </Row>
        <Row className="mb-4 w-100 justify-content-center">
          <SelectorButton text="Car Rental" link="transportation/calgaryTransit" />
        </Row>
      </div>
    </Container>

  );
}
export default TransportationScreen