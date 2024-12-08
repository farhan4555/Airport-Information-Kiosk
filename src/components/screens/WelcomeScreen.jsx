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
            {t("welcome")}
          </div> 
          <div className="welcomeScreenCalgaryText">
            {t("toCalgary")}
          </div>           

      {/* Adjust the positioning of the buttons */}
      <div className="welcomeButtonsGrid">
        <div className="grid-item">
          <LogoButton text={t("AirportMap")}  imgPath="/Map.png" link="map" />
        </div>
        <div className="grid-item">
        <LogoButton text={t("searchAirport")} imgPath="/search.png" link="search" />
        </div>
        <div className="grid-item">
        <LogoButton text={t("transportation")} imgPath="/taxi.png" link="transportation" />
        </div>
        <div className="grid-item">
        <div className = "welcomeButtonsInnerGrid">
          <div className= "grid-item2">
          <LogoButton2 text={t("flights")} imgPath="/flight.png" link="flights" />
          </div>
          <div className= "grid-item2">
          <LogoButton2 text={t("wifi")} imgPath="/wifi.png" link="wifi" />
          </div>
        </div>
        </div>
      </div>
      </div>
  );
}

export default WelcomeScreen;