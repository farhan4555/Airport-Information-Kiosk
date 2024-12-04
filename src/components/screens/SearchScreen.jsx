import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LogoButton from '../common/LogoButton';
import BackButton from '../common/BackButton';
import SelectorButton from '../common/SelectorButton';

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
        <Form>
          <Form.Group className="mb-3 searchBar" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Search" />
          </Form.Group>
        </Form>
      </div>

      <div className="mt-2 w-100 px-3 d-flex flex-column align-items-center">
        <Row className="mb-3 w-100 justify-content-center">
          <SelectorButton text="Terminals" />
          <SelectorButton text="Baggage Claim" />
        </Row>
        <Row className="mb-3 w-100 justify-content-center">
          <SelectorButton text="Washrooms" />
          <SelectorButton text="Connections" />
        </Row>
        <Row className="mb-3 w-100 justify-content-center">
          <SelectorButton text="Parking" />
          <SelectorButton text="Hotels" />
        </Row>
        <Row className="mb-3 w-100 justify-content-center">
          <SelectorButton text="Shops" />
          <SelectorButton text="Parking" />
        </Row>
        <Row className="mb-3 w-100 justify-content-center">
          <SelectorButton text="Bus Stops" />
          <SelectorButton text="Help Desk" />
        </Row>
        <Row className="mb-3">
          <LogoButton text="Airport Map" imgPath="" link="map" />
        </Row>
      </div>
    </Container>

  );
}
export default ScreenScreen