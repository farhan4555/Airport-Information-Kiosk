import Container from 'react-bootstrap/Container';
import LogoButton from '../common/LogoButton';
import BackButton from '../common/BackButton';
import SelectorButton from '../common/SelectorButton';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

function SearchExample() {
  return (
    <Container className="page d-flex flex-column align-items-center">
      <div className='d-flex w-100 justify-content-left'>
        <BackButton />
      </div><div className="p-3 flex-grow-0">

        <Row className="mb-3">
          <div className='genericTitle searchScreenTitle'>
            Directions to Washrooms
          </div>
        </Row>
      </div>

      <div className='d-flex flex-column align-items-center greyBackground'>
        <div className='genericTitle wifiInstructionText'>
          You are currently in Airport, Terminal 3
        </div>
        <div className='genericTitle unableToConnectText'>
          - Walk North for 50m to get to Door 2.  <br />
          - Walk through Terminal 5 gateway, and turn towards Gate 6 exit.  <br />
          - Go through Gate 6 exit, and walk 60m North to access the bathrooms.  <br />
        </div>
      </div>
    </Container>

  );
}
export default SearchExample