import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <Row className="headerRow">
      <Col md={2} className="text-center">
      <img src="./src/components/images/logo.jpg" alt="logo" />
       
      </Col>
      <Col md={5} className="text-center" />
      <Col md={1} className="text-center">
      <img src="./src/components/images/icon.PNG" alt="logo" />
        
      </Col>
    </Row>
  );
}

export default Header;
