import {
  Link
} from "react-router-dom";

function CancelButton({ text, setVisibility }) {
  return (
    <Link style={{ color: "black" }} to={"/"}>
      <button type="button" className="btn btn-light text-nowrap selectorButtonDark" onClick = {() => setVisibility(true)}>
        {text}
      </button>
    </Link>
  );
}

export default CancelButton;