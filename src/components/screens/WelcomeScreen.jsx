import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import LogoButton from '../common/LogoButton';
import LogoButton2 from '../common/LogoButton2';

function WelcomeScreen() {
  const { t } = useTranslation(); // Use the translation function
  return (
      <div className="titleScreen">
          <div className="welcomeScreenYYCText">
            YYC
          </div>
          <div className="welcomeScreenWelcomeToText">
            Welcome
          </div> 
          <div className="welcomeScreenCalgaryText">
            to Calgary
          </div>           

      {/* Adjust the positioning of the buttons */}
      <div className="welcomeButtonsGrid">
        <div className="grid-item">
          <LogoButton text="Airport Map" imgPath="./src/components/images/map.png" link="map" />
        </div>
        <div className="grid-item">
        <LogoButton text="Search Airport" imgPath="./src/components/images/search.png" link="search" />
        </div>
        <div className="grid-item">
        <LogoButton text="Transportation" imgPath="./src/components/images/taxi.png" link="transportation" />
        </div>
        <div className="grid-item">
        <div className = "welcomeButtonsInnerGrid">
          <LogoButton2 text="Flights" imgPath="./src/components/images/flight.png" link="flights" />
          <LogoButton2 text="Wifi" imgPath="./src/components/images/wifi.png" link="wifi" />
        </div>
        </div>
      </div>
      </div>
  );
}

export default WelcomeScreen;