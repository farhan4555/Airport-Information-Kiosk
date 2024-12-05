import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import LogoButton from '../common/LogoButton';
import LogoButton2 from '../common/LogoButton2';
import { useTranslation } from 'react-i18next'; // Import translation hook

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
          <LogoButton text={t("AirportMap")}  imgPath="./src/components/images/map.png" link="map" />
        </div>
        <div className="grid-item">
        <LogoButton text={t("searchAirport")} imgPath="./src/components/images/search.png" link="search" />
        </div>
        <div className="grid-item">
        <LogoButton text={t("transportation")} imgPath="./src/components/images/taxi.png" link="transportation" />
        </div>
        <div className="grid-item">
        <div className = "welcomeButtonsInnerGrid">
          <LogoButton2 text={t("flights")} imgPath="./src/components/images/flight.png" link="flights" />
          <LogoButton2 text={t("wifi")} imgPath="./src/components/images/wifi.png" link="wifi" />
        </div>
        </div>
      </div>
      </div>
  );
}

export default WelcomeScreen;