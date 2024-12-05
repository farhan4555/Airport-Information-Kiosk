import {
  Link,
  useNavigate
} from "react-router-dom";

import { useTranslation } from 'react-i18next'; // Import translation hook

function BackButton() {
  const {t} = useTranslation();
  const navigate = useNavigate();
  return (

      <button type="button" className="btn btn-dark text-nowrap" onClick={() => navigate(-1)}>
        {/* {imgPath && <img src={imgPath} alt="Logo" className="logo-img" />} */}
        {t("back")}
      </button>
  );
}

export default BackButton;
