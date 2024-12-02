import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <Row className="headerRow">
      <Col md={2} className="text-center">
        YYC International Airport
      </Col>
      <Col md={8} className="text-center" />
      <Col md={2} className="text-center">
        Information Kiosk
      </Col>
    </Row>
  );
}
export default Header