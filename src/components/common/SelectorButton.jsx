import {
  Link
} from "react-router-dom";

function SelectorButton({ text, link }) {
  return (
    <Link style={{ color: "black" }} to={"/" + link}>
      <button type="button" className="btn btn-light text-nowrap selectorButtonLight">
        {text}
      </button>
    </Link>
  );
}

export default SelectorButton;
