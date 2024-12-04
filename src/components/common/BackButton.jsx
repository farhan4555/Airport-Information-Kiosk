import {
  Link
} from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Import translation hook

function BackButton() {
  const {t} = useTranslation();
  return (
    <Link style={{ color: "black" }} to={"/"}>
      <button type="button" className="btn btn-dark text-nowrap">
        {/* {imgPath && <img src={imgPath} alt="Logo" className="logo-img" />} */}
        {t("back")}
      </button>
    </Link>
  );
}

export default BackButton;
