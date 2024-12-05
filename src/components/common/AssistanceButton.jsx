import { Link } from "react-router-dom";

function AssistanceButton() {
  return (
    <Link to="/assistance" style={{ textDecoration: "none" }}>
    <div className="assistanceButtonContainer">
      <img src= "./src/components/images/assistance.png" alt="Assistance" className= "logo-img assistanceButton"/>
    </div>
    </Link>
  );
}

export default AssistanceButton;
