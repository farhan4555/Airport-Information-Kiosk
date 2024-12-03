import {
  Link
} from "react-router-dom";

function BackButton() {
  return (
    <Link style={{ color: "black" }} to={"/"}>
      <button type="button" className="btn btn-dark text-nowrap">
        {/* {imgPath && <img src={imgPath} alt="Logo" className="logo-img" />} */}
        Back
      </button>
    </Link>
  );
}

export default BackButton;
