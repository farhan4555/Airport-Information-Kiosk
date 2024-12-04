import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LogoButton from '../common/LogoButton';
import BackButton from '../common/BackButton';
import SelectorButton from '../common/SelectorButton';
import { useTranslation } from 'react-i18next'; // Import translation hook




function TransportationScreen() {
  const {t } = useTranslation();
  return (
    <Container className="page d-flex flex-column align-items-center">
      <div className='d-flex w-100 justify-content-left'>
        <BackButton />
      </div>

      {/* Adjust the positioning of the welcome text */}
      <div className="p-3 flex-grow-0">

        <Row className="mb-3">
          <div className='genericTitle'>
            {t("transportation")}
          </div>
        </Row>
      </div>

      {/* Adjust the positioning of the buttons */}
      <div className="w-100 px-3 d-flex flex-column align-items-center">
        <Row className="mb-4 w-100 justify-content-center">
          <SelectorButton text={t("taxi")} link="transportation/calgaryTransit" />
        </Row>
        <Row className="mb-4 w-100 justify-content-center">
          <SelectorButton text={t("calgarytransit")} link="transportation/calgaryTransit" />
        </Row>
        <Row className="mb-4 w-100 justify-content-center">
          <SelectorButton text={t("uber")} link="transportation/calgaryTransit" />
        </Row>
        <Row className="mb-4 w-100 justify-content-center">
          <SelectorButton text={t("carrental")} link="transportation/calgaryTransit" />
        </Row>
      </div>
    </Container>

  );
}
export default TransportationScreen