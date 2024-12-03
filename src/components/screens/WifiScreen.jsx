import Container from 'react-bootstrap/Container';
import LogoButton from '../common/LogoButton';
import BackButton from '../common/BackButton';
import SelectorButton from '../common/SelectorButton';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

function WifiScreen() {
  return (
    <Container className="page d-flex flex-column align-items-center">
      <div className='d-flex w-100 justify-content-left'>
        <BackButton />
      </div><div className="p-3 flex-grow-0">

        <Row className="mb-3">
          <div className='genericTitle searchScreenTitle'>
            Connect to Airport Wi-Fi
          </div>
        </Row>
      </div>

      <div className='d-flex flex-column align-items-center greyBackground'>
        <img src="./src/components/images/qr code.png" alt="weather" className='qrCodeImg'/>
        <div className='genericTitle wifiInstructionText'>
          Scan the QR Code to connect to YYC Airport's free wi-fi! If you're unable to connect: <br />
        </div>
        <div className='genericTitle unableToConnectText'>
          - Go into your device's Wi-Fi settings. <br />
          - Look for the wifi-network: "YYC Airport Free Wi-Fi" <br />
          - Connect to this network.  <br />
        </div>
      </div>
    </Container>

  );
}
export default WifiScreen