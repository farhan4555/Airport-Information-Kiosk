import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BottomBar() {
  return (
    <Row className="bottomBar">
      <Col md={3} className="text-center">
        12/1/2024
      </Col>
      <Col md={3} className="text-center" />
      <Col md={3} className="text-center">
        12 Celsius
      </Col>
      <Col md={3} className="text-center">
        9:41pm
      </Col>

    </Row>
  );
}
export default BottomBar