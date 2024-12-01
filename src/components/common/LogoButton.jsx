import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  Link
} from "react-router-dom";

function LogoButton({ text, imgPath, link }) {
  return (
    <button type="button" className="btn btn-light text-nowrap">
      <Link style={{ color: "black" }} to={"/" + link}>{text}</Link>
    </button>
  );
}

export default LogoButton