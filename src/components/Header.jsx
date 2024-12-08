import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <Row className="headerRow">
      <Col md={3}>
        <img src="/logo.png" alt="logo" className="logo" />
      </Col>
      <Col md={5}>
        <div className='informationKioskHeaderImgs d-flex justi'>

          <img src="/infokiosk.png" alt="logo" className="infoKiosk" />
        </div>
      </Col>
    </Row>
  );
}

export default Header;
