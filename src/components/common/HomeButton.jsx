import React from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Import translation hook



function HomeButton() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="btn btn-dark text-nowrap"
      onClick={() => navigate("/*")} // Replace "/welcome" with the actual route for your WelcomeScreen
    >
      {t("Home")} {/* Translated text for "Home" */}
    </button>
  );
}

export default HomeButton;
