import { Link } from "react-router-dom";

function AssistanceButton({setVisibility}) {
  return (
    <Link to="/assistance" style={{ textDecoration: "none" }}>
      <img src= "./src/components/images/assistance2.png" alt="Assistance" className="assistanceButtonImg" onClick={() => setVisibility(false)}/>
    </Link>
  );
}

export default AssistanceButton;
