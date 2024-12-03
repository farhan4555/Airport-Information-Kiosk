import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LogoButton from '../common/LogoButton';
import BackButton from '../common/BackButton';
import SelectorButton from '../common/SelectorButton';
import Form from 'react-bootstrap/Form';

function ScreenScreen() {
  return (
    <Container className="page d-flex flex-column align-items-center">
      <div className='d-flex w-100 justify-content-left'>
        <BackButton />
      </div>

      <div className="p-3 flex-grow-0">
        <Row className="mb-3">
          <div className='genericTitle searchScreenTitle'>
            What are you looking for?
          </div>
        </Row>
        <Form>
          <Form.Group className="mb-3 searchBar" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Search" />
          </Form.Group>
        </Form>
      </div>

      <div className="mt-2 w-100 px-3 d-flex flex-column align-items-center">
        <Row className="mb-3 w-100 justify-content-center">
          <SelectorButton text="Terminals" link="transportation/washrooms"/>
          <SelectorButton text="Baggage Claim" link="transportation/washrooms"/>
        </Row>
        <Row className="mb-3 w-100 justify-content-center">
          <SelectorButton text="Washrooms" link="transportation/washrooms" />
          <SelectorButton text="Connections" link="transportation/washrooms"/>
        </Row>
        <Row className="mb-3 w-100 justify-content-center">
          <SelectorButton text="Parking" link="transportation/washrooms" />
          <SelectorButton text="Hotels" link="transportation/washrooms"/>
        </Row>
        <Row className="mb-3 w-100 justify-content-center">
          <SelectorButton text="Shops" link="transportation/washrooms"/>
          <SelectorButton text="Parking" link="transportation/washrooms"/>
        </Row>
        <Row className="mt-3">
          <LogoButton text="Airport Map" imgPath="" link="map" />
        </Row>
      </div>
    </Container>

  );
}
export default ScreenScreen