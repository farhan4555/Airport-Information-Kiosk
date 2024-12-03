import {
  Link
} from "react-router-dom";

function LogoButton({ text, imgPath, link }) {
  return (
    <Link style={{ color: "black" }} to={"/" + link}>
      <button type="button" className="btn btn-light text-nowrap logoButton">
        {imgPath && <img src={imgPath} alt="Logo" className="logo-img" />}
        {text}
      </button>
    </Link>
  );
}

export default LogoButton;
