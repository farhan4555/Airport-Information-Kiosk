import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <Row className="headerRow">
      <Col md={2} className="text-center">
      <img src="./src/components/images/logo.png" alt="logo" className = "logo"/>
       
      </Col>
      <Col md={5} className="text-center" />
      <Col md={1} className="tex-center">
        <img src="./src/components/images/icon2.png" alt="logo" className = "infoPtTwo" />
        <img src="./src/components/images/icon1.png" alt="logo" className = "infoPtOne"/>
      </Col>
    </Row>
  );
}

export default Header;
